import {TripEventsList} from '../components/trip-events-list';
import {tripEvents} from "../constants";
import {EventOption, replaceElement, Position, render} from '../utils';
import {Card} from '../components/cards';
import {CardEdit} from '../components/card-edit';
import {Sort} from '../components/sort';
import {getDuration} from '../utils';

export class TripController {
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

    const destinationInput = cardEditComponent.getElement().querySelector(`.event__input--destination`);
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
        } else if (evt.target === rollupBtnClose) {
          replaceElement(this._cardsList.getElement(), cardComponent, cardEditComponent, EventOption.addEvent, onEscKeyDown);
        }
      });

    this._cardsList.getElement()
      .addEventListener(`focus`, (evt) => {
        if (evt.target === destinationInput) {
          document.removeEventListener(`keydown`, onEscKeyDown);
        }
      });

    this._cardsList.getElement()
      .addEventListener(`blur`, (evt) => {
        if (evt.target === destinationInput) {
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

  _onSortLinkClick(evt) {
    if (evt.target.dataset.sortType) {
      this._cardsList.getElement().innerHTML = ``;

      switch (evt.target.dataset.sortType) {
        case `time`:
          const sortedByTimeCards = this._cards.slice().sort((prevCard, nextCard) => getDuration(prevCard.point.dateFrom, prevCard.point.dateTo, nextCard.point.dateFrom, nextCard.point.dateTo));
          sortedByTimeCards.forEach((cardMock) => this._renderCards(cardMock));
          break;

        case `price`:
          const sortedByPriceCards = this._cards.slice().sort((prevCard, nextCard) => nextCard.point.basePrice - prevCard.point.basePrice);
          sortedByPriceCards.forEach((cardMock) => this._renderCards(cardMock));
          break;

        default:
          this._cards.forEach((cardMock) => this._renderCards(cardMock));
      }
    }
  }
}
