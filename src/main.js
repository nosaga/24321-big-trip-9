import {render, Position} from './utils';
import {createCardRoute} from './components/card-route.js';
import {createControls} from './components/controls.js';
import {createFilters} from './components/filters.js';
import {createSorting} from './components/sorting.js';
import {createCards} from './components/cards.js';
import {createCardEdit} from './components/card-edit.js';
import {getCard} from './mocks/card';
import {filters} from './mocks/filters';
import {getCardRoute} from './mocks/card-route';
import {controls} from './mocks/controls';
import {sorting} from './mocks/sorting';

import {Card} from './components/cards'
import {CardEdit} from './components/card-edit'

// const render = (container, template, place) => {
//   container.insertAdjacentHTML(place, template);
// };


const renderCards = (cardMock) => {
  const card = new Card(cardMock);
  const cardEdit = new CardEdit(cardMock);

  render(tripEventsList, card.getElement(), Position.BEFOREEND);
  render(tripEventsList, cardEdit.getElement(), Position.AFTERBEGIN);
};

const TRIPSNUMBER = 3;
const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const tripEventsList = document.querySelector(`.trip-events__list`);

//render(tripInfo, createCardRoute(getCardRoute()), Position.AFTERBEGIN);
//render(tripControls, createControls(controls), Position.AFTERBEGIN);
//render(tripControls, createFilters(filters), Position.BEFOREEND);
//render(tripEvents, createSorting(sorting), Position.AFTERBEGIN);
//render(tripEventsList, createCardEdit(getCard), `afterbegin`);
//render(tripEventsList, createCards(getCard), `beforeend`);

renderCards(getCard);
