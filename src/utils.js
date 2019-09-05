import {monthNames, tripEventsList} from './constants';
import {startMonth} from './constants';

const getDuration = (start, end) => end - start;

const getMonth = () => monthNames[startMonth];

const getPrice = (costs) => {
  let totalCost = 0;
  console.log(costs);
  costs.forEach((cost) => {
    totalCost += +cost.innerHTML;
  });

  return totalCost;
};

function setActiveStatuses(options = []) {
  const maxActiveOptionsNumber = 2;
  const activeOptionsNumber = Math.floor(Math.random() * (maxActiveOptionsNumber + 1));

  if (activeOptionsNumber) {
    for (let i = 0; i < activeOptionsNumber; i++) {
      options[Math.floor(Math.random() * options.length)].isChecked = true;
    }
  }
}


const EventOption = {
  addEvent: `addEventListener`,
  removeEvent: `removeEventListener`
};

const replaceElement = (container, replacedElem, replaceElem, option, func) => {
  switch (option) {
    case EventOption.addEvent:
      container.replaceChild(replacedElem.getElement(), replaceElem.getElement());
      document.addEventListener(`keydown`, func);
      break;
    case EventOption.removeEvent:
      container.replaceChild(replacedElem.getElement(), replaceElem.getElement());
      document.removeEventListener(`keydown`, func);
      break;
  }
};

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

// Рендер и анрендер для компонент
const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

const unrender = (element) => {
  if (element) {
    element.remove();
  }
};

export {
  getDuration,
  getMonth,
  getPrice,
  EventOption,
  replaceElement,
  setActiveStatuses,
  Position,
  createElement,
  render,
  unrender
}
