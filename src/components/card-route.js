import {AbstractComponent} from './abstract-component';
import {monthNames} from '../constants';

export class CreateCardRoute extends AbstractComponent {
  constructor({point}) {
    super();
    this._point = point;
  }

  getTemplate() {
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${this._point.destination.name} &mdash; ${this._point.destination.name !== `` ? `...&mdash;` : ``}   ${this._point.destination.name}</h1>
      <p class="trip-info__dates">${monthNames[this._point.dateFrom.getUTCMonth()]} ${this._point.dateFrom.getUTCDate()}&nbsp;—&nbsp;${this._point.dateTo.getUTCDate()}</p>
    </div>`;
  }
}


