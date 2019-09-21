import {TripEventsList} from '../components/trip-events-list';
import {tripEvents} from '../constants';
import {Position, render} from '../utils';
import {Sort} from '../components/sort';
import {getDuration, unrender} from '../utils';
import {PointController} from './point-controller';

export class TripController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
    this._cardsList = new TripEventsList();
    this._sort = new Sort();
    this._subscriptions = [];
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
  }

  init() {
    render(this._container, this._cardsList.getElement(), Position.BEFOREEND);
    render(tripEvents, this._sort.getElement(), Position.AFTERBEGIN);
    this._cards.forEach((cardMock) => this._renderCards(cardMock));
    this._sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
  }

  _renderBoard(cards) {
    unrender(this._cardsList.getElement());
    this._cardsList.removeElement();
    render(this._container, this._cardsList.getElement(), Position.BEFOREEND);
    cards.forEach((cardMock) => this._renderCards(cardMock));
  }

  _renderCards(card) {
    const CardController = new PointController(this._cardsList, card, this._onDataChange, this._onChangeView);
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
    evt.preventDefault();
    if (evt.target.tagName !== `LABEL`) {
      return;
    }

    this._cardsList.getElement().innerHTML = ``;

    switch (evt.target.dataset.sortType) {
      case `time`:
        const sortedByTimeCards = this._cards.slice().sort((a, b) => getDuration(a.dateFrom, a.dateTo, b.dateFrom, b.dateTo));
        sortedByTimeCards.forEach((cardMock) => this._renderCards(cardMock));
        break;
      case `price`:
        const sortedByPriceCards = this._cards.slice().sort((a, b) => b.basePrice - a.basePrice);
        sortedByPriceCards.forEach((cardMock) => this._renderCards(cardMock));
        break;
      case `event`:
        this._cards.forEach((cardMock) => this._renderCards(cardMock));
        break;
    }
  }
}
