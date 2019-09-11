import {createElement} from '../utils';

export class TripCost {
  constructor(cost) {
    this._cost = cost;
    this._element = null;
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
    return `<p class="trip-info__cost">
      Total: €&nbsp;<span class="trip-info__cost-value">${this._cost}</span>
    </p>`;
  }
}
