import {tripInfo, tripControls, tripEvents, tripEventsList, CARD_COUNT} from './constants'
import {render, Position} from './utils';

import {card} from './mocks/card';
import {filters} from './mocks/filters';
import {getCardRoute} from './mocks/card-route';
import {controls} from './mocks/controls';
import {sorting} from './mocks/sorting';
import {tripCost} from './mocks/trip-cost';

import {CreateCardRoute} from './components/card-route';
import {CreateControls} from './components/controls';
import {CreateFilters} from './components/filters';
import {CreateSorting} from './components/sorting';
import {TripCost} from './components/trip-cost';
import {CardsBoardController} from './controllers/cards-board';
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

const renderSorting = (sorting) => {
  const sortingRoute = new CreateSorting(sorting);
  render(tripEvents, sortingRoute.getElement(), Position.AFTERBEGIN);
};

const renderCosts = (costs) => {
  const costItems = new TripCost(costs);
  render(tripInfo, costItems.getElement(), Position.BEFOREEND)
};

const renderCardAdd = () => {
  const cardAdd = new AddNewEvent();
  render(tripEvents, cardAdd.getElement(), Position.AFTERBEGIN);
};

const cardMocks = new Array(CARD_COUNT).fill(``).map(card);

renderRoute(getCardRoute());
renderControls(controls);
renderFilters(filters);
renderSorting(sorting);

const cardsBoardController = new CardsBoardController(tripEventsList, cardMocks);

const renderCardTypes = () => {
  if (cardMocks.length > 0) {
    cardsBoardController.init();
  } else {
    renderCardAdd();
  }
};

renderCardTypes();

const price = document.querySelectorAll(`.event__price-value`);
renderCosts(tripCost(price));
