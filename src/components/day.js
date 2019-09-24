import {AbstractComponent} from './abstract-component';
import {monthNames} from '../constants';

export class Day extends AbstractComponent {
  constructor({dateFrom}) {
    super();
    this._dateFrom = dateFrom;
  }

  getTemplate() {
    return `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${new Date(this._dateFrom).getDate()}</span>
        <time class="day__date" datetime="2019-03-18">${monthNames[new Date(this._dateFrom).getMonth()]}</time>
      </div>
      <ul class="trip-events__list">
       
      </ul>
      </li>`;
  }
}
