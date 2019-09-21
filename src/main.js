import {tripInfo, tripControls, tripEventsList, CARD_COUNT} from './constants'
import {render, Position} from './utils';

import {card} from './mocks/card';
import {filters} from './mocks/filters';
import {controls} from './mocks/controls';
import {tripCost} from './mocks/trip-cost';

import {CreateCardRoute} from './components/card-route';
import {CreateControls} from './components/controls';
import {CreateFilters} from './components/filters';
import {TripCost} from './components/trip-cost';
import {TripController} from './controllers/trip-controller';
import {PointController} from "./controllers/point-controller";
import {AddNewEvent} from './components/card-new';

const renderRoute = (route) => {
  const cardRoute = new CreateCardRoute(route);
  render(tripInfo, cardRoute.getElement(), Position.AFTERBEGIN);
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

renderRoute(card());
renderControls(controls);
renderFilters(filters);

const cardsBoardController = new TripController(tripEventsList, cardMocks);
//const pointBoardController = new PointController(tripEventsList, cardMocks);

const renderCardTypes = () => {
  if (cardMocks.length > 0) {
    cardsBoardController.init();
    //pointBoardController.init();
  } else {
    renderCardAdd();
  }
};

renderCardTypes();

const price = document.querySelectorAll(`.event__price-value`);
const addPrice = document.querySelectorAll(`.event__offer-price`);
renderCosts(tripCost(price, addPrice));
