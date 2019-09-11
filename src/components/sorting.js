import {createElement} from '../utils';

export class CreateSorting {
  constructor(sorting) {
    this._sorting = sorting;
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
    return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">Day</span>
      ${this._sorting.map((sort) => `
        <div class="trip-sort__item  trip-sort__item--${sort.sorting.toLowerCase()}">
          <input id="sort-${sort.sorting}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort.sorting}" ${sort.isChecked ? `checked` : ``}>
          <label class="trip-sort__btn" for="sort-${sort.sorting}">${sort.sorting}
          <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
            </svg>
          </label>
        </div>`).join(``)}
      <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
  </form>`;
  }
}
