import {TripEventsContainer} from '../components/trip-events-container';
import {TripEventsList} from '../components/trip-events-list';
import {EventOption, replaceElement, Position, render} from '../utils';
import {Card} from '../components/cards';
import {CardEdit} from '../components/card-edit';

export class CardsBoardController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
    //this._eventsContainer = new TripEventsContainer();
    this._cardsList = new TripEventsList();
  }

  init() {
    //render(this._container, this._eventsContainer.getElement(), Position.BEFOREEND);
    //render(this._eventsContainer.getElement(), this._cardsList.getElement(), Position.BEFOREEND);
    render(this._container, this._cardsList.getElement(), Position.BEFOREEND);
    this._cards.forEach((cardMock) => this._renderCards(cardMock));
  }

  _renderCards(card) {
    const cardComponent = new Card(card);
    const cardEditComponent = new CardEdit(card);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        replaceElement(this._cardsList.getElement(), cardComponent, cardEditComponent, EventOption.removeEvent, onEscKeyDown);
      }
    };

    cardComponent.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        replaceElement(this._cardsList.getElement(), cardEditComponent, cardComponent, EventOption.addEvent, onEscKeyDown);
      });

    cardEditComponent.getElement()
      .querySelector(`.event__input--destination`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    cardEditComponent.getElement()
      .querySelector(`.event__input--destination`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    cardEditComponent.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        replaceElement(this._cardsList.getElement(), cardComponent, cardEditComponent, EventOption.removeEvent, onEscKeyDown);
      });

    cardEditComponent.getElement()
      .addEventListener(`submit`, (evt) => {
        evt.preventDefault();
        replaceElement(this._cardsList.getElement(), cardComponent, cardEditComponent, EventOption.removeEvent, onEscKeyDown);
      }, true);

    render(this._cardsList.getElement(), cardComponent.getElement(), Position.BEFOREEND);
  }
}
