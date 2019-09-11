const isChecked = (setName, arrName) => {
  return arrName.some((name) => name.name === setName);
};

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
  const first = endPoint - startPoint;
  const next = endPointNext - startPointNext;

  return first - next
};

//const sortNumbers

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
