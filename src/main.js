import {tripInfo, tripControls, tripEventsList, CARD_COUNT} from './constants'
import {render, Position} from './utils';

import {card} from './mocks/card';
import {filters} from './mocks/filters';
import {controls} from './mocks/controls';
import {tripCost} from './mocks/trip-cost';

import {CreateCardRoute} from './components/card-route';
import {CreateCardRouteEndPoint} from './components/card-route-end-point';
import {CreateCardRouteEndDate} from './components/card-route-end-date';
import {CreateControls} from './components/controls';
import {CreateFilters} from './components/filters';
import {TripCost} from './components/trip-cost';

import {TripController} from './controllers/trip-controller';
import {AddNewEvent} from './components/card-new';

const renderRoute = (route) => {
  const startPoint = route[0];
  const cardRoute = new CreateCardRoute(startPoint);
  render(tripInfo, cardRoute.getElement(), Position.AFTERBEGIN);
};

const renderRouteEndPoint = (route) => {
  const finalPoint = route[route.length - 1];
  const endRoute = new CreateCardRouteEndPoint(finalPoint);
  const tripTitle = document.querySelector(`.trip-info__title`);
  render(tripTitle, endRoute.getElement(), Position.BEFOREEND);
};

const renderRouteEndDate = (route) => {
  const finalDate = route[route.length - 1];
  const endDate = new CreateCardRouteEndDate(finalDate);
  const tripDates = document.querySelector(`.trip-info__dates`);
  render(tripDates, endDate.getElement(), Position.BEFOREEND);
};

const renderControls = (controls) => {
  const controlRoute = new CreateControls(controls);
  render(tripControls, controlRoute.getElement(), Position.AFTERBEGIN);
};

const renderFilters = (filters) => {
  const filtersRoute = new CreateFilters(filters);
  render(tripControls, filtersRoute.getElement(), Position.BEFOREEND);
};

const renderCosts = (costs) => {
  const costItems = new TripCost(costs);
  render(tripInfo, costItems.getElement(), Position.BEFOREEND)
};

const renderCardAdd = () => {
  const cardAdd = new AddNewEvent();
  render(tripEventsList, cardAdd.getElement(), Position.AFTERBEGIN);
};

const cardMocks = new Array(CARD_COUNT).fill(``).map(card);

renderRoute(cardMocks);
renderRouteEndDate(cardMocks);
renderRouteEndPoint(cardMocks);
renderControls(controls);
renderFilters(filters);

const cardsBoardController = new TripController(tripEventsList, cardMocks);

const renderCardTypes = () => {
  if (cardMocks.length > 0) {
    cardsBoardController.init();
  } else {
    renderCardAdd();
  }
};

renderCardTypes();

const price = document.querySelectorAll(`.event__price-value`);
const addPrice = document.querySelectorAll(`.event__offer-price`);
renderCosts(tripCost(price, addPrice));
