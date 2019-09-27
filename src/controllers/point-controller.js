import {Card} from '../components/cards';
import {CardEdit} from '../components/card-edit';
import {EventOption, Position, render, replaceElement} from '../utils';
import {Mode} from "../constants";

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/light.css';

export class PointController {
  constructor(container, data, mode, onDataChange, onChangeView) {
    this._container = container;
    this._data = data;
    this._cardView = new Card(data);
    this._cardEdit = new CardEdit(data);
    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;

    this.create(mode);
  }

  create(mode) {
    let renderPosition = Position.BEFOREEND;
    let currentView = this._cardView;

    if (mode === Mode.ADDING) {
      renderPosition = Position.AFTERBEGIN;
      currentView = this._cardEdit;
    }

    const destinationInput = this._cardEdit.getElement().querySelector(`.event__input--destination`);
    const rollupBtnOpen = this._cardView.getElement().querySelector(`.event__rollup-btn`);
    const rollupBtnClose = this._cardEdit.getElement().querySelector(`.event__rollup-btn`);
    const form = this._cardEdit.getElement().querySelector(`form`);
    const dataInputs = this._cardEdit.getElement().querySelectorAll(`.event__input--time`);
    const startDate = dataInputs[0];
    const endDate = dataInputs[1];


    flatpickr(startDate, {
      allowInput: true,
      enableTime: true,
      defaultDate: this._data.dateFrom,
      dateFormat: 'd/m/Y H:i',
    });

    flatpickr(endDate, {
      allowInput: true,
      enableTime: true,
      defaultDate: this._data.dateTo,
      dateFormat: 'd/m/Y H:i',
    });

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        if (mode === Mode.DEFAULT) {
          if (this._container.getElement().contains(this._cardEdit.getElement())) {
            this._container.getElement().replaceChild(this._cardView.getElement(), this._cardEdit.getElement())
          }
        } else if (mode === Mode.ADDING) {
          this._container.getElement().removeChild(currentView.getElement())
        }
        replaceElement(this._container, this._cardView, this._cardEdit, EventOption.removeEvent, onEscKeyDown);
        //document.removeEventListener(`keydown`, onEscKeyDown)
      }
    };

    this._container
      .addEventListener(`click`, (evt) => {
        if (evt.target === rollupBtnOpen) {
          this._onChangeView();
          replaceElement(this._container, this._cardEdit, this._cardView, EventOption.addEvent, onEscKeyDown);
        } else if (evt.target === rollupBtnClose) {
          replaceElement(this._container, this._cardView, this._cardEdit, EventOption.addEvent, onEscKeyDown);
        }
      });

    this._container
      .addEventListener(`focus`, (evt) => {
        if (evt.target === destinationInput) {
          document.removeEventListener(`keydown`, onEscKeyDown);
        }
      });

    this._container
      .addEventListener(`blur`, (evt) => {
        if (evt.target === destinationInput) {
          document.addEventListener(`keydown`, onEscKeyDown);
        }
      });

    this._container
      .addEventListener(`submit`, (evt) => {
        evt.preventDefault();
        if (evt.target === form) {
          const {description, photos} = this._cardEdit._destination;
          const formData = new FormData(this._container.querySelector(`.event--edit`));
          const offersSelected = this._cardEdit._offers.offer;

          const entry = {
            basePrice: formData.get(`event-price`),
            dateFrom: formData.get(`event-start-time`),
            dateTo: formData.get(`event-end-time`),
            destination: {
              name: formData.get(`event-destination`),
              description,
              photos,
            },
            offers: {
              offer: offersSelected.map((offer) => {
                return {
                  ...offer,
                  isChecked: !!formData.get(`event-offer-${offer.value}`)
                };
              })
            },
            type: formData.get(`event-type`),
          };
          this._onDataChange(entry, this._data);
        }
      });

    this._cardEdit.getElement()
      .querySelector(`.event__reset-btn`)
      .addEventListener(`click`, () => {

        this._onDataChange(null, this._data);
      });
    render(this._container, currentView.getElement(), renderPosition);
  }

  setDefaultView() {
    if (this._container.contains(this._cardEdit.getElement())) {
      this._container.replaceChild(this._cardView.getElement(), this._cardEdit.getElement());
    }
  }
}
