const isChecked = (activeOption, options) => options.some((it) => it.name === activeOption);

const EventOption = {
  addEvent: `addEventListener`,
  removeEvent: `removeEventListener`
};

const replaceElement = (container, replacedElem, replaceElem, option, onEscKeyDown) => {
  container.replaceChild(replacedElem.getElement(), replaceElem.getElement());
  switch (option) {
    case EventOption.addEvent:
      document.addEventListener(`keydown`, onEscKeyDown);
      break;
    case EventOption.removeEvent:
      document.removeEventListener(`keydown`, onEscKeyDown);
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

const getDuration = (startPoint, endPoint, startPointNext, endPointNext) => {
  let startTripPoint = endPoint - startPoint;
  let nextTripPoint = endPointNext - startPointNext;

  return startTripPoint - nextTripPoint;
};

export {
  isChecked,
  EventOption,
  replaceElement,
  Position,
  createElement,
  render,
  unrender,
  getDuration
}
