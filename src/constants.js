const menuWrapper = document.querySelector(`.trip-main`);
const addButton = document.querySelector(`.trip-main__event-add-btn`);
const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const tripEventsList = document.querySelector(`.trip-events__list`);
const tripDays = document.querySelector(`.trip-days`);
const tripContainer = document.querySelector(`main`).children[0];

const CARD_COUNT = 3;

const cities = [`Helsinki`, `Stockholm`, `Amsterdam`, `Airport`];
const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const photos = new Array(5).fill(``);

export {
  menuWrapper,
  addButton,
  tripInfo,
  tripControls,
  tripEvents,
  tripEventsList,
  tripContainer,
  tripDays,
  CARD_COUNT,
  cities,
  monthNames,
  photos
};
