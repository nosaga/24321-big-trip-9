import {TripEventsList} from '../components/trip-events-list';
import {tripEvents} from '../constants';
import {Position, render} from '../utils';
import {Sort} from '../components/sort';
import {getDuration, unrender} from '../utils';
import {PointController} from './point-controller';
import {Day} from '../components/day';

export class TripController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
    this._cardsList = new TripEventsList();
    this._day = new Day(cards[0]);
    this._sort = new Sort();
    this._subscriptions = [];
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
  }

  init() {
    render(this._container, this._day.getElement(), Position.BEFOREEND);
    render(tripEvents, this._sort.getElement(), Position.AFTERBEGIN);
    this._cards.forEach((cardMock) => this._renderCards(cardMock));
    this._sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
  }

  _renderBoard(cards) {
    unrender(this._day.getElement());
    this._day.removeElement();
    render(this._container, this._day.getElement(), Position.BEFOREEND);
    cards.forEach((cardMock) => this._renderCards(cardMock));
  }

  _renderCards(card) {
    const CardController = new PointController(this._day.getElement().querySelector(`.trip-events__list`), card, this._onDataChange, this._onChangeView);
    this._subscriptions.push(CardController.setDefaultView.bind(CardController));
  }

  _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }

  _onDataChange(newData, oldData) {
    this._cards[this._cards.findIndex((it) => it === oldData)] = newData;
    this._renderBoard(this._cards);
  }

  _onSortLinkClick(evt) {
    if (evt.target.dataset.sortType) {
      this._day.getElement().querySelector(`.trip-events__list`).innerHTML = ``;

      switch (evt.target.dataset.sortType) {
        case `time`:
          const sortedByTimeCards = this._cards.slice().sort((prevCard, nextCard) => getDuration(prevCard.dateFrom, prevCard.dateTo, nextCard.dateFrom, nextCard.dateTo));
          sortedByTimeCards.forEach((cardMock) => this._renderCards(cardMock));
          break;

        case `price`:
          const sortedByPriceCards = this._cards.slice().sort((prevCard, nextCard) => nextCard.basePrice - prevCard.basePrice);
          sortedByPriceCards.forEach((cardMock) => this._renderCards(cardMock));
          break;

        default:
          this._cards.forEach((cardMock) => this._renderCards(cardMock));
      }
    }
  }
}
