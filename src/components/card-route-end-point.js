import {AbstractComponent} from './abstract-component';

export class CreateCardRouteEndPoint extends AbstractComponent {
  constructor({destination}) {
    super();
    this._destination = destination;

  }

  getTemplate() {
    return `<span> ${this._destination.name !== `` ? `...&mdash;` : ``}   ${this._destination.name}</span>
      `;
  }
}
