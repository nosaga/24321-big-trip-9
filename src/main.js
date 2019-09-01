import {tripInfo, tripControls, tripEvents, tripEventsList} from './constants'
import {render, Position} from './utils';

import {card} from './mocks/card';
import {filters} from './mocks/filters';
import {getCardRoute} from './mocks/card-route';
import {controls} from './mocks/controls';
import {sorting} from './mocks/sorting';

import {Card} from './components/cards';
import {CardEdit} from './components/card-edit';
import {CreateCardRoute} from './components/card-route';
import {CreateControls} from './components/controls';
import {CreateFilters} from './components/filters';
import {CreateSorting} from './components/sorting';


const renderCards = (cardMock) => {
  const card = new Card(cardMock);
  const cardEdit = new CardEdit(cardMock);

  render(tripEventsList, card.getElement(), Position.BEFOREEND);

  card.getElement()
    .querySelectorAll(`.event__rollup-btn`).forEach((btn) =>
      btn.addEventListener(`click`, () => {
        tripEventsList.replaceChild(cardEdit.getElement(), card.getElement())
    }));
  cardEdit.getElement()
    .querySelectorAll(`form`).forEach((form) =>
      form.addEventListener(`click`, () => {
        tripEventsList.replaceChild(card.getElement(), cardEdit.getElement())
    }))
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


renderCards(card);
renderRoute(getCardRoute());
renderControls(controls);
renderFilters(filters);
renderSorting(sorting);
