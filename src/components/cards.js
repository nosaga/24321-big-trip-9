import {AbstractComponent} from './abstract-component';

export class Card extends AbstractComponent {
  constructor({type, destination, dateFrom, dateTo, basePrice, offers, id}) {
    super();
    this._type = type;
    this._destination = destination;
    this._dateFrom = dateFrom;
    this._dateTo = dateTo;
    this._basePrice = basePrice;
    this._offers = offers;
    this._id = id;
  }

  getTemplate() {
    const offersItem = this._offers.offer.filter((offer) => offer.isChecked === true);
    return `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${this._type.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${this._type} ${this._destination.name}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T12:25">${new Date(this._dateFrom).getHours()} : ${new Date(this._dateFrom).getMinutes()}</time>
            —
            <time class="event__end-time" datetime="2019-03-18T13:35">${new Date(this._dateTo).getHours()} : ${new Date(this._dateTo).getMinutes()}</time>
          </p>
          <p class="event__duration">${new Date(this._dateTo).getHours() - new Date(this._dateFrom).getHours()}H ${new Date(this._dateFrom).getMinutes() - new Date(this._dateTo).getMinutes()}M</p>
        </div>

        <p class="event__price">
          €&nbsp;<span class="event__price-value">${this._basePrice}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers"> ${offersItem.map((offer) => `<li class="event__offer">
            <span class="event__offer-title">${offer.name}</span>
              +
              €&nbsp;<span class="event__offer-price">${offer.price}
            </span>
          </li>`).join(``)}
          </ul>
          <button class="event__rollup-btn data-card-id=${this._id}" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
  }
}

