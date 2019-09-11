import {createElement} from '../utils';
import {monthNames} from '../constants';

export class CreateCardRoute {
  constructor({point}) {
    this._point = point;
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
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${this._point.destination.name} &mdash; ${this._point.destination.name !== `` ? `...&mdash;` : ``}   ${this._point.destination.name}</h1>
      <p class="trip-info__dates">${monthNames[this._point.dateFrom.getUTCMonth()]} ${this._point.dateFrom.getUTCDate()}&nbsp;—&nbsp;${this._point.dateTo.getUTCDate()}</p>
    </div>`;
  }
}


