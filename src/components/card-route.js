import {AbstractComponent} from './abstract-component';

export class CreateCardRoute extends AbstractComponent {
  constructor({cityStart, cityTransfer, cityEnd, startMonth, startDate, endDate}) {
    super();
    this._cityStart = cityStart;
    this._cityTransfer = cityTransfer;
    this._cityEnd = cityEnd;
    this._startMonth = startMonth;
    this._startDate = startDate;
    this._endDate = endDate;
  }

  getTemplate() {
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${this._cityStart} &mdash; ${this._cityTransfer !== `` ? `...&mdash;` : ``}   ${this._cityEnd}</h1>
      <p class="trip-info__dates">${this._startMonth} ${this._startDate.getUTCDate()}&nbsp;—&nbsp;${this._endDate.getUTCDate()}</p>
    </div>`;
  }
}


