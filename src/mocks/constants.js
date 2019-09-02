const partialPath = `img/icons/`;
const cities = [`Helsinki`, `Stockholm`, `Amsterdam`, `Airport`];
const sightseeings = [`Natural History Museum`, `Theater`, `Park`];
const activity = [`Sightseeing`, `Restaurant`, `Check-in`];
const transfer = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];
const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const startMonth = new Date(2020, 5, 1, 8, 30, 0, 0).getMonth();
const startDate = new Date(2020, 5, 1, 8, 30, 0, 0);
const endDate = new Date(2020, 5, 8, 0, 30, 0, 0);
const startTimeHours = new Date(2020, 5, 1, 8, 30, 0, 0).getHours();
const startTimeMinutes = new Date(2020, 5, 1, 8, 30, 0, 0).getMinutes();
const photosArray = new Array(5).fill(``);

export {
  partialPath,
  cities,
  sightseeings,
  activity,
  transfer,
  startMonth,
  startDate,
  endDate,
  startTimeHours,
  startTimeMinutes,
  monthNames,
  photosArray
};
