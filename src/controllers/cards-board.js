import {TripEventsList} from '../components/trip-events-list';
import {EventOption, replaceElement, Position, render} from '../utils';
import {Card} from '../components/cards';
import {CardEdit} from '../components/card-edit';

export class CardsBoardController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
    this._cardsList = new TripEventsList();
  }

  init() {
    render(this._container, this._cardsList.getElement(), Position.BEFOREEND);
    this._cards.forEach((cardMock) => this._renderCards(cardMock));
  }

  _renderCards(card) {
    const cardComponent = new Card(card);
    const cardEditComponent = new CardEdit(card);

    const eventInput = cardEditComponent.getElement().querySelector(`.event__input--destination`);
    const rollupBtnOpen = cardComponent.getElement().querySelector(`.event__rollup-btn`);
    const rollupBtnClose = cardEditComponent.getElement().querySelector(`.event__rollup-btn`);
    const form = cardEditComponent.getElement().querySelector(`form`);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        replaceElement(this._cardsList.getElement(), cardComponent, cardEditComponent, EventOption.removeEvent, onEscKeyDown);

      }
    };

    this._cardsList.getElement()
      .addEventListener(`click`, (evt) => {
        if (evt.target === rollupBtnOpen) {
          replaceElement(this._cardsList.getElement(), cardEditComponent, cardComponent, EventOption.addEvent, onEscKeyDown);
        }
      });

    this._cardsList.getElement()
      .addEventListener(`click`, (evt) => {
        if (evt.target === rollupBtnClose) {
          replaceElement(this._cardsList.getElement(), cardComponent, cardEditComponent, EventOption.addEvent, onEscKeyDown);
        }
      });

    this._cardsList.getElement()
      .addEventListener(`focus`, (evt) => {
        if (evt.target === eventInput) {
          document.removeEventListener(`keydown`, onEscKeyDown);
        }
      });

    this._cardsList.getElement()
      .addEventListener(`blur`, (evt) => {
        if (evt.target === eventInput) {
          document.addEventListener(`keydown`, onEscKeyDown);
        }
      });

    this._cardsList.getElement()
      .addEventListener(`submit`, (evt) => {
        evt.preventDefault();
        if (evt.target === form) {
          replaceElement(this._cardsList.getElement(), cardComponent, cardEditComponent, EventOption.removeEvent, onEscKeyDown);
        }
      });

    render(this._cardsList.getElement(), cardComponent.getElement(), Position.BEFOREEND);
  }
}

