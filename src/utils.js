import {monthNames, tripEventsList} from './constants';
import {startMonth} from './constants';

const getDuration = (start, end) => end - start;

const getMonth = () => monthNames[startMonth];

const EventOption = {
  addEvent: `addEventListener`,
  removeEvent: `removeEventListener`
};

const replaceElement = (container, replacedElem, replaceElem, option, cb) => {
  container.replaceChild(replacedElem.getElement(), replaceElem.getElement());
  switch (option) {
    case EventOption.addEvent:
      document.addEventListener(`keydown`, cb);
      break;
    case EventOption.removeEvent:
      document.removeEventListener(`keydown`, cb);
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

const createCardElement = (template) => {
  const newElement = document.createElement(`li`);
  newElement.classList.add(`trip-events__item`);
  newElement.innerHTML = template;
  return newElement;
};

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
  EventOption,
  replaceElement,
  Position,
  createElement,
  createCardElement,
  render,
}
