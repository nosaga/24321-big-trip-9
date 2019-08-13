import {createCardRoute} from './components/card-route.js';
import {createSwitchMenu} from './components/controls.js';
import {createFilters} from './components/filters.js';
import {createSorting} from "./components/sorting.js";
import {createCards} from "./components/cards.js";
import {createCardEdit} from "./components/card-edit.js";


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const tripEventsList = document.querySelector(`.trip-events__list`);

render(tripInfo, createCardRoute(), `afterbegin`);
render(tripControls, createSwitchMenu(), `afterbegin`);
render(tripControls, createFilters(), `beforeend`);
render(tripEvents, createSorting(), `afterbegin`);
render(tripEventsList, createCardEdit(), `afterbegin`);
new Array(3).fill(``).forEach(() => render(tripEventsList, createCards(), `beforeend`));
