import {AbstractComponent} from './abstract-component';

export class CreateControls extends AbstractComponent {
  constructor(controls) {
    super();
    this._controls = controls;
  }

  getTemplate() {
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${this._controls.map((control) => `
        <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${control}</a>
      `).join(``)}
    </nav>`;
  }
}
