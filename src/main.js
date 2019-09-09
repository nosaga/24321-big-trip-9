import {tripInfo, tripControls, tripEvents, tripEventsList, CARD_COUNT} from './constants'
import {render, Position, EventOption, replaceElement} from './utils';

import {card} from './mocks/card';
import {filters} from './mocks/filters';
import {controls} from './mocks/controls';
import {sorting} from './mocks/sorting';
import {tripCost} from './mocks/trip-cost';

import {Card} from './components/cards';
import {CardEdit} from './components/card-edit';
import {CreateCardRoute} from './components/card-route';
import {CreateControls} from './components/controls';
import {CreateFilters} from './components/filters';
import {CreateSorting} from './components/sorting';
import {TripCost} from './components/trip-cost';
import {AddNewEvent} from './components/card-new';


const renderCards = (cardMock) => {
  const card = new Card(cardMock);
  const cardEdit = new CardEdit(cardMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      replaceElement(tripEventsList, card, cardEdit, EventOption.removeEvent, onEscKeyDown);
    }
  };

  tripEventsList
    .addEventListener(`click`, (evt) => {
      if(evt.target !== card.getElement().querySelector(`.event__rollup-btn`)) {
        return;
      }
      replaceElement(tripEventsList, cardEdit, card, EventOption.addEvent, onEscKeyDown);
    });

  tripEventsList
    .addEventListener(`click`, (evt) => {
      if(evt.target !== cardEdit.getElement().querySelector(`.event__rollup-btn`)) {
        return;
      }
      replaceElement(tripEventsList, card, cardEdit, EventOption.addEvent, onEscKeyDown);
    });

  tripEventsList
    .addEventListener(`focus`, (evt) => {
      if(evt.target !== cardEdit.querySelector(`.event__input--destination`)) {
        return;
      }
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  tripEventsList
    .addEventListener(`blur`, (evt) => {
      if(evt.target !== cardEdit.querySelector(`.event__input--destination`)) {
        return;
      }
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  tripEventsList
    .addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      if(evt.target !== cardEdit.getElement().querySelector(`form`)) {
        return;
      }
      replaceElement(tripEventsList, card, cardEdit, EventOption.removeEvent, onEscKeyDown);
    });

  render(tripEventsList, card.getElement(), Position.BEFOREEND);
};

const renderCardAdd = () => {
  const cardAdd = new AddNewEvent();
  render(tripEvents, cardAdd.getElement(), Position.AFTERBEGIN);
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

const renderCardTypes = () => {
  if (cardMocks.length > 0) {
    cardMocks.forEach((cardMock) => renderCards(cardMock))
  } else {
    renderCardAdd();
  }
};

renderCardTypes();
renderRoute(card());
renderControls(controls);
renderFilters(filters);
renderSorting(sorting);

const price = document.querySelectorAll(`.event__price-value`);
const addPrice = document.querySelectorAll(`.event__offer-price`);
renderCosts(tripCost(price, addPrice));
