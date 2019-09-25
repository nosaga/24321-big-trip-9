import {Card} from '../components/cards';
import {CardEdit} from '../components/card-edit';
import {EventOption, Position, render, replaceElement} from '../utils';
import {offersSelect} from "../constants";

export class PointController {
  constructor(container, data, onDataChange, onChangeView) {
    this._container = container;
    this._data = data;
    this._cardView = new Card(data);
    this._cardEdit = new CardEdit(data);
    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;

    this.create();
  }

  create() {
    const destinationInput = this._cardEdit.getElement().querySelector(`.event__input--destination`);
    const rollupBtnOpen = this._cardView.getElement().querySelector(`.event__rollup-btn`);
    const rollupBtnClose = this._cardEdit.getElement().querySelector(`.event__rollup-btn`);
    const form = this._cardEdit.getElement().querySelector(`form`);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        replaceElement(this._container, this._cardView, this._cardEdit, EventOption.removeEvent, onEscKeyDown);
      }
    };

    const offersAll = this._cardEdit.getElement().querySelectorAll(`.event__offer-checkbox`);
    const offers = [];
    offersAll.forEach((offer) => offers.push(offer.name));

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


          const entry = {
            basePrice: formData.get(`event-price`),
            dateFrom: new Date(formData.get(`event-start-time`)).toISOString(),
            dateTo: new Date(formData.get(`event-end-time`)).toISOString(),
            destination: {
              name: formData.get(`event-destination`),
              description,
              photos,
            },
            offers: {
              offer:[
                {
                  name: offers.map((offer) => formData.get(offer))
                }
              ]
            },
            type: formData.get(`event-type`),
          };
          console.log(entry);
          this._onDataChange(entry, this._data);
        }
      });
    render(this._container, this._cardView.getElement(), Position.BEFOREEND);
  }

  setDefaultView() {
    if (this._container.contains(this._cardEdit.getElement())) {
      this._container.replaceChild(this._cardView.getElement(), this._cardEdit.getElement());
    }
  }
}
