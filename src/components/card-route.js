import {AbstractComponent} from './abstract-component';
import {monthNames} from '../constants';

export class CreateCardRoute extends AbstractComponent {
  constructor({destination, dateFrom, dateTo}) {
    super();
    this._destination = destination;
    this._dateFrom = dateFrom;
    this._dateTo = dateTo;

  }

  getTemplate() {
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${this._destination.name} &mdash; ${this._destination.name !== `` ? `...&mdash;` : ``}   ${this._destination.name}</h1>
      <p class="trip-info__dates">${monthNames[new Date(this._dateFrom).getUTCMonth()]} ${new Date(this._dateFrom).getUTCDate()}&nbsp;—&nbsp;${new Date(this._dateTo).getUTCDate()}</p>
    </div>`;
  }
}


