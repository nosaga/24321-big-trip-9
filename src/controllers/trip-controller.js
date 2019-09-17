import {TripEventsList} from '../components/trip-events-list';
import {tripEvents} from "../constants";
import {EventOption, replaceElement, Position, render} from '../utils';
import {Card} from '../components/cards';
import {CardEdit} from '../components/card-edit';
import {Sort} from '../components/sort';
import {getDuration, unrender} from '../utils';

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

  _renderBoard(cards) {
    unrender(this._cardsList.getElement());
    this._cardsList.removeElement();
    render(this._container, this._cardsList.getElement(), Position.BEFOREEND);
    this._cards.forEach((cardMock) => this._renderCards(cardMock));
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
          const formData = new FormData(this._cardsList.getElement().querySelector(`.event--edit`));
          const entry = {
            point: {
              basePrice: formData.get(`event-price`),
              dateFrom: formData.get(`event-start-time`),
              dateTo: formData.get(`event-end-time`),
              destination: {
                name: formData.get(`event-destination`),
              },
              offerOptions: [
                {
                offer: new Set(formData.getAll(`event-offer`))
                }
              ],
              type: formData.get(`event-type`),
            }
          };

          //this._cards[this._cards.id === card] = entry;
          this._cards[this._cards.findIndex((it) => it === card)] = entry;

          this._renderBoard(this._cards);
          //replaceElement(this._cardsList.getElement(), cardComponent, cardEditComponent, EventOption.removeEvent, onEscKeyDown);
        }
      });

    render(this._cardsList.getElement(), cardComponent.getElement(), Position.BEFOREEND);
  }

  _onSortLinkClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `LABEL`) {
      return;
    }

    this._cardsList.getElement().innerHTML = ``;

    switch (evt.target.dataset.sortType) {
      case `time`:
        const sortedByTimeCards = this._cards.slice().sort((a, b) => getDuration(a.point.dateFrom, a.point.dateTo, b.point.dateFrom, b.point.dateTo));
        sortedByTimeCards.forEach((cardMock) => this._renderCards(cardMock));
        break;
      case `price`:
        const sortedByPriceCards = this._cards.slice().sort((a, b) => b.point.basePrice - a.point.basePrice);
        sortedByPriceCards.forEach((cardMock) => this._renderCards(cardMock));
        break;
      case `event`:
        this._cards.forEach((cardMock) => this._renderCards(cardMock));
        break;
    }
  }
}
