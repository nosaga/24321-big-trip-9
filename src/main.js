import {createCardRoute} from './components/card-route.js';
import {createControls} from './components/controls.js';
import {createFilters} from './components/filters.js';
import {createSorting} from './components/sorting.js';
import {createCards} from './components/cards.js';
import {createCardEdit} from './components/card-edit.js';
import {getCard} from './mocks/card';
import {filters} from './mocks/filters';
import {getCardRoute} from './mocks/card-route';
import {controls} from "./mocks/controls";
import {sorting} from "./mocks/sorting";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const TRIPSNUMBER = 3;
const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const tripEventsList = document.querySelector(`.trip-events__list`);

render(tripInfo, createCardRoute(getCardRoute()), `afterbegin`);
render(tripControls, createControls(controls), `afterbegin`);
render(tripControls, createFilters(filters), `beforeend`);
render(tripEvents, createSorting(sorting), `afterbegin`);
render(tripEventsList, createCardEdit(getCard), `afterbegin`);
render(tripEventsList, createCards(getCard), `beforeend`);
