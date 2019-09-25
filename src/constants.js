const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const tripEventsList = document.querySelector(`.trip-events__list`);
const tripDays = document.querySelector(`.trip-days`);

const CARD_COUNT = 3;

const cities = [`Helsinki`, `Stockholm`, `Amsterdam`, `Airport`];
const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const photos = new Array(5).fill(``);
const offersSelect = {
  [`event-offer-comfort`]: `Switch to comfort class`,
  [`event-offer-luggage`]: `Add luggage`,
  [`event-offer-meal`]: `Add meal`,
  [`event-offer-seats`]: `Choose seats`,
  [`event-offer-train`]: `Travel by train`
}

export {
  tripInfo,
  tripControls,
  tripEvents,
  tripEventsList,
  tripDays,
  CARD_COUNT,
  cities,
  monthNames,
  photos,
  offersSelect
};
