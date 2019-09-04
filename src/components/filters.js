import {AbstractComponent} from "./abstract-component";

export class CreateFilters extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
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
