import {AbstractComponent} from './abstract-component';
import {monthNames} from '../constants';

export class CreateCardRoute extends AbstractComponent {
  constructor({destination, dateFrom}) {
    super();
    this._destination = destination;
    this._dateFrom = dateFrom;

  }

  getTemplate() {
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${this._destination.name} &mdash; </h1>
      <p class="trip-info__dates">${monthNames[new Date(this._dateFrom).getMonth()]} ${new Date(this._dateFrom).getDate()}&nbsp;—&nbsp;</p>
    </div>`;
  }
}


