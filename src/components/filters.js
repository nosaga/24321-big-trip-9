export const createFilters = (filters) => `
<form class="trip-filters" action="#" method="get">
  ${filters.map((filter) => `
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.toLowerCase()}" checked>
      <label class="trip-filters__filter-label" for="filter-everything">${filter}</label>
    </div>
  `).join(``)
}</form>`;
