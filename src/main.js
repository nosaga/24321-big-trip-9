import {tripInfo, tripControls, tripEvents, tripEventsList, CARD_COUNT} from './constants'
import {render, Position} from './utils';

import {card} from './mocks/card';
import {filters} from './mocks/filters';
import {getCardRoute} from './mocks/card-route';
import {controls} from './mocks/controls';
import {sorting} from './mocks/sorting';
import {tripCost} from './mocks/trip-cost';

import {Card} from './components/cards';
import {CardEdit} from './components/card-edit';
import {CreateCardRoute} from './components/card-route';
import {CreateControls} from './components/controls';
import {CreateFilters} from './components/filters';
import {CreateSorting} from './components/sorting';
import {TripCost} from "./components/trip-cost";


const renderCards = (cardMock) => {
  const card = new Card(cardMock);
  const cardEdit = new CardEdit(cardMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      tripEventsList.replaceChild(card.getElement(), cardEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  card.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      tripEventsList.replaceChild(cardEdit.getElement(), card.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  cardEdit.getElement()
    .querySelector(`.event__input--destination`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown)
    });

  cardEdit.getElement()
    .querySelector(`.event__input--destination`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown)
    });

  cardEdit.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      tripEventsList.replaceChild(card.getElement(), cardEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  // cardEdit.getElement()
  //   .querySelector(`form`)
  //   .addEventListener(`submit`, () => {
  //     tripEventsList.replaceChild(card.getElement(), cardEdit.getElement());
  //     document.removeEventListener(`keydown`, onEscKeyDown);
  //   });

  render(tripEventsList, card.getElement(), Position.BEFOREEND);
};


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

const cardMocks = new Array(CARD_COUNT).fill(``).map(card);

cardMocks.forEach((cardMock) => renderCards(cardMock));
renderRoute(getCardRoute());
renderControls(controls);
renderFilters(filters);
renderSorting(sorting);

const price = document.querySelectorAll(`.event__price-value`);
renderCosts(tripCost(price));
