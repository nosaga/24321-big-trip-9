import {AbstractComponent} from './abstract-component';

export class TripEventsList extends AbstractComponent {
  getTemplate() {
    return `<ul class="trip-events__list"></ul>`;
  }
}
