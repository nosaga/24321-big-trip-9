import {TripEventsContainer} from '../components/trip-events-container';
import {tripEvents} from "../constants";
import {TripEventsList} from '../components/trip-events-list';
import {EventOption, replaceElement, Position, render} from '../utils';
import {Card} from '../components/cards';
import {CardEdit} from '../components/card-edit';
import {Sort} from '../components/sort';

export class CardsBoardController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
    this._cardsList = new TripEventsList();
    this._sort = new Sort();
  }

  init() {
    render(this._container, this._cardsList.getElement(), Position.BEFOREEND);
    render(tripEvents, this._sort.getElement(), Position.AFTERBEGIN);
    this._cards.forEach((cardMock) => this._renderCards(cardMock));
    this._sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
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

  _onSortLinkClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `LABEL`) {
      return;
    }

    this._cardsList.getElement().innerHTML = ``;
    switch (evt.target.dataset.sortType) {
      case `event`:
        const sortedByEventCards = this._cards.slice().sort((a, b) => a.point.type > b.point.type);
        sortedByEventCards.forEach((cardMock) => this._renderCards(cardMock));
        break;
      case `time`:
        const sortedByTimeCards = this._cards.slice().sort((a, b) =>  b.startTime - a.startTime);
        sortedByTimeCards.forEach((cardMock) => this._renderCards(cardMock));
        break;
      case `price`:
        const sortedByPriceCards = this._cards.slice().sort((a, b) => a.point.price > b.point.price ? 1 : -1);
        sortedByPriceCards.forEach((cardMock) => this._renderCards(cardMock));
        break;
    }
  }
}

