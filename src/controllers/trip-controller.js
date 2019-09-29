import {TripEventsList} from '../components/trip-events-list';
import {photos, tripEvents} from '../constants';
import {Position, render} from '../utils';
import {Sort} from '../components/sort';
import {getDuration, unrender} from '../utils';
import {PointController} from './point-controller';
import {Day} from "../components/day";
import {CardEdit} from "../components/card-edit";

const Mode = {
  ADDING: `adding`,
  DEFAULT: `default`
}

const CARDS_IN_COLUMN = 3;
const PointControllerMode = Mode;

export class TripController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
    this._cardsList = new TripEventsList();
    this._day = new Day(cards[0]);
    this._sort = new Sort();
    this._subscriptions = [];
    this._showedCards = CARDS_IN_COLUMN;
    this._creatingCard = null;
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
  }

  init() {
    render(this._container, this._day.getElement(), Position.BEFOREEND);
    render(tripEvents, this._sort.getElement(), Position.AFTERBEGIN);
    this._cards.forEach((cardMock) => this._renderCards(cardMock));
    this._sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
  }

  hide() {
    return tripEvents.classList.add(`visually-hidden`);
  }

  show() {
    return tripEvents.classList.remove(`visually-hidden`);
  }

  createCard() {
    if(this._creatingCard) {
      return;
    }

    const defaultCard = {
      basePrice: ``,
      dateFrom: new Date(),
      dateTo: new Date(),
      destination: {
        name: ``,
        description: ``,
        photos: [
          {
            src: ``,
          }
        ]
      },
      offers: {
        offer: []
      },
      type: ``,
    };

    this._creatingCard = new PointController(this._day, defaultCard, PointControllerMode.ADDING, this._onChangeView,
      this._onDataChange);
  }

  _renderBoard(cards) {
    unrender(this._day.getElement());
    this._day.removeElement();
    render(this._container, this._day.getElement(), Position.BEFOREEND);
    cards.forEach((cardMock) => this._renderCards(cardMock));
  }

  _renderCards(card) {
    const cardController = new PointController(this._day.getElement().querySelector(`.trip-events__list`), card,
      PointControllerMode.DEFAULT, this._onDataChange, this._onChangeView);
    this._subscriptions.push(cardController.setDefaultView.bind(cardController));
  }

  _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }

  _onDataChange(newData, oldData) {
    const index = this._cards.findIndex((card) => card === oldData);

    if (newData === null) {
      this._cards = [...this._cards.slice(0, index), ...this._cards.slice(index+1)];
      this._showedCards = Math.min(this._showedCards, this._cards.length);
    } else if (oldData === null) {
      this._creatingCard = null;
      this._cards = [newData, ...this._cards]
    } else {
      this._cards[index] = newData;
    }

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
