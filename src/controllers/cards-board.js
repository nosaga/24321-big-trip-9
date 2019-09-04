import {TripEventsContainer} from "../components/trip-events-container";
import {TripEventsList} from "../components/trip-events-list";
import {Position, render} from "../utils";
import {Card} from "../components/cards";
import {CardEdit} from "../components/card-edit";

export class CardsBoardController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
    this._eventsContainer = new TripEventsContainer();
    this._cardsList = new TripEventsList();
  }

  init() {
    render(this._container, this._eventsContainer.getElement(), Position.BEFOREEND);
    render(this._eventsContainer.getElement(), this._cardsList.getElement(), Position.BEFOREEND);
    this._cards.forEach((cardMock) => this._renderCards(cardMock));
  }

  _renderCards(card) {
    const cardComponent = new Card(card);
    const cardEditComponent = new CardEdit(card);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._cardsList.getElement().replaceChild(cardComponent.getElement(), cardEditComponent.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    cardComponent.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        this._cardsList.getElement().replaceChild(cardEditComponent.getElement(), cardComponent.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
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
        this._cardsList.getElement().replaceChild(cardComponent.getElement(), cardEditComponent.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    render(this._cardsList.getElement(), cardComponent.getElement(), Position.BEFOREEND);
  }
}
