import {monthNames} from './constants';
import {startMonth} from './constants';

const getDuration = (start, end) => end - start;

const getMonth = () => monthNames[startMonth];

function setActiveStatuses(options = []) {
  const maxActiveOptionsNumber = 2;
  const activeOptionsNumber = Math.floor(Math.random() * (maxActiveOptionsNumber + 1));

  if (activeOptionsNumber) {
    for (let i = 0; i < activeOptionsNumber; i++) {
      options[Math.floor(Math.random() * options.length)].isChecked = true;
    }
  }
}

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement;
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
  setActiveStatuses,
  Position,
  createElement,
  render,
  unrender
}
