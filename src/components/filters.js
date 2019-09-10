import {createElement} from '../utils';

export class CreateFilters {
  constructor(filters) {
    this._filters = filters;
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
    return `<form class="trip-filters" action="#" method="get">${this._filters.map((filter) => `
      <div class="trip-filters__filter">
        <input id="filter-${filter.filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.filter.toLowerCase()}" ${filter.isChecked ? `checked` : ``}>
        <label class="trip-filters__filter-label" for="filter-${filter.filter}">${filter.filter}</label>
      </div>
    `).join(``)}
  </form>`;
  }
}
