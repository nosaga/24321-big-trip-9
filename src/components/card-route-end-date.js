import {AbstractComponent} from './abstract-component';

export class CreateCardRouteEndDate extends AbstractComponent {
  constructor({dateTo}) {
    super();
    this._dateTo = dateTo;
  }

  getTemplate() {
    return `<span>${new Date(this._dateTo).getUTCDate()}</span>`;
  }
}
