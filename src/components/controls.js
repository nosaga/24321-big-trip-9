import {createElement} from "../utils";

export class CreateControls {
  constructor(controls) {
    this._controls = controls;
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
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
              ${this._controls.map((control) => `
                <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${control}</a>
              `).join(``)}
            </nav>`;
  }
}
