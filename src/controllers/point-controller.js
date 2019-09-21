import {Card} from '../components/cards';
import {CardEdit} from '../components/card-edit';
import {EventOption, Position, render, replaceElement} from '../utils';

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
        replaceElement(this._container.getElement(), this._cardView, this._cardEdit, EventOption.removeEvent, onEscKeyDown);

      }
    };

    this._container.getElement()
      .addEventListener(`click`, (evt) => {
        if (evt.target === rollupBtnOpen) {
          this._onChangeView();
          replaceElement(this._container.getElement(), this._cardEdit, this._cardView, EventOption.addEvent, onEscKeyDown);
        } else if (evt.target === rollupBtnClose) {
          replaceElement(this._container.getElement(), this._cardView, this._cardEdit, EventOption.addEvent, onEscKeyDown);
        }
      });

    this._container.getElement()
      .addEventListener(`focus`, (evt) => {
        if (evt.target === destinationInput) {
          document.removeEventListener(`keydown`, onEscKeyDown);
        }
      });

    this._container.getElement()
      .addEventListener(`blur`, (evt) => {
        if (evt.target === destinationInput) {
          document.addEventListener(`keydown`, onEscKeyDown);
        }
      });

    this._container.getElement()
      .addEventListener(`submit`, (evt) => {
        evt.preventDefault();
        if (evt.target === form) {
          const formData = new FormData(this._container.getElement().querySelector(`.event--edit`));
          const entry = {
            basePrice: formData.get(`event-price`),
            dateFrom: new Date(formData.get(`event-start-time`)),
            dateTo: new Date(formData.get(`event-end-time`)),
            destination: {
              name: formData.get(`event-destination`),
              description: this._cardEdit._destination.description,
              photos: this._cardEdit._destination.photos
            },
            offers: {
              offer: formData.getAll(`checkbox`)
            },
            type: formData.get(`event-type`),

          };
          this._onDataChange(entry, this._data);
        }
      });


    render(this._container.getElement(), this._cardView.getElement(), Position.BEFOREEND);
  }

  setDefaultView() {
    if (this._container.getElement().contains(this._cardEdit.getElement())) {
      this._container.getElement().replaceChild(this._cardView.getElement(), this._cardEdit.getElement());
    }
  }

}
