const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const tripEventsList = document.querySelector(`.trip-events__list`);
const CARD_COUNT = 3;

const cities = [`Helsinki`, `Stockholm`, `Amsterdam`, `Airport`];
const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const startMonth = new Date(2020, 5, 1, 8, 30, 0, 0).getMonth();
const photosArray = new Array(5).fill(``);

export {
  tripInfo,
  tripControls,
  tripEvents,
  tripEventsList,
  CARD_COUNT,
  cities,
  startMonth,
  monthNames,
  photosArray,
};
