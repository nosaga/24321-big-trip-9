import {createElement} from '../utils';

export class Card {
  constructor({point}) {
    this._point = point;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${this._point.type.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${this._point.type} ${this._point.destination.name}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T12:25">${this._point.dateFrom.getUTCHours()} : ${this._point.dateFrom.getUTCMinutes()}</time>
            —
            <time class="event__end-time" datetime="2019-03-18T13:35">${this._point.dateTo.getUTCHours()} : ${this._point.dateTo.getUTCMinutes()}</time>
          </p>
          <p class="event__duration">${this._point.dateTo.getHours() - this._point.dateFrom.getHours()}H ${this._point.dateFrom.getMinutes() - this._point.dateTo.getMinutes()}M</p>
        </div>

        <p class="event__price">
          €&nbsp;<span class="event__price-value">${this._point.basePrice}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${this._point.offers.offer.map((offer) => `
            <li class="event__offer">
              <span class="event__offer-title">${offer.name}</span>
              +
              €&nbsp;<span class="event__offer-price">${offer.price}</span>
            </li>`).join(``)}
        </ul>

        <button class="event__rollup-btn data-card-id=${this._point.id}" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
  }
}

