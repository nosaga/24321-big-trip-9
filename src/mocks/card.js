import {getDuration} from '../utils';
import {partialPath, cities, sightseeings, startTimeHours, startTimeMinutes, startDate, endDate, activity, transfer, photosArray} from '../constants';

export const card = {
  tripRoute: [
    {
      type: `Taxi`,
      icon: partialPath + `taxi.png`,
      point: `Airport`,
      price: Math.floor(Math.random() * 50),
      startTime: [startTimeHours, startTimeMinutes],
      endTime: [startTimeHours + 1, startTimeMinutes + 30],
      durationHours: getDuration(startTimeHours, startTimeHours + 1),
      durationMinutes: getDuration(startTimeMinutes, startTimeMinutes + 30),
      startDate: startDate,
      endDate: endDate
    },
    {
      type: `Flight`,
      icon: partialPath + `flight.png`,
      point: cities[Math.floor(Math.random() * cities.length)],
      price: Math.floor(Math.random() * 500),
      startTime: [startTimeHours + 1, startTimeMinutes + 30],
      endTime: [startTimeHours + 3, startTimeMinutes + 30],
      durationHours: getDuration(startTimeHours + 1, startTimeHours + 3),
      durationMinutes: getDuration(startTimeMinutes + 30, startTimeMinutes + 30),
      startDate: startDate,
      endDate: endDate
    },
    {
      type: `Drive`,
      icon: partialPath + `bus.png`,
      point: cities[Math.floor(Math.random() * cities.length)],
      price: Math.floor(Math.random() * 50),
      startTime: [startTimeHours + 3, startTimeMinutes + 30],
      endTime: [startTimeHours + 3, startTimeMinutes + 30],
      durationHours: getDuration(startTimeHours + 1, startTimeHours + 3),
      durationMinutes: getDuration(startTimeMinutes + 30, startTimeMinutes + 30),
      startDate: startDate,
      endDate: endDate
    },
    {
      type: `Check in`,
      icon: partialPath + `check-in.png`,
      point: `hotel`,
      price: Math.floor(Math.random() * 300),
      startTime: [startTimeHours + 3, startTimeMinutes + 30],
      endTime: [startTimeHours + 48, startTimeMinutes + 30],
      durationHours: getDuration(startTimeHours + 3, startTimeHours + 48),
      durationMinutes: getDuration(startTimeMinutes + 30, startTimeMinutes + 30),
      startDate: startDate,
      endDate: endDate
    },
    {
      type: `Sightseeing`,
      icon: partialPath + `sightseeing.png`,
      point: sightseeings[Math.floor(Math.random() * sightseeings.length)],
      price: Math.floor(Math.random() * 10),
      startTime: [startTimeHours + 4, startTimeMinutes + 30],
      endTime: [startTimeHours + 6, startTimeMinutes + 30],
      durationHours: getDuration(startTimeHours + 1, startTimeHours + 3),
      durationMinutes: getDuration(startTimeMinutes + 30, startTimeMinutes + 30),
      startDate: startDate,
      endDate: endDate
    },
    {
      type: `Restaurant`,
      icon: partialPath + `restaurant.png`,
      point: `hotel`,
      price: Math.floor(Math.random() * 60),
      startTime: [startTimeHours + 5, startTimeMinutes + 30],
      endTime: [startTimeHours + 7, startTimeMinutes + 30],
      durationHours: getDuration(startTimeHours + 1, startTimeHours + 3),
      durationMinutes: getDuration(startTimeMinutes + 30, startTimeMinutes + 30),
      startDate: startDate,
      endDate: endDate
    },
    {
      type: `Ship`,
      icon: partialPath + `ship.png`,
      point: cities[Math.floor(Math.random() * cities.length)],
      price: Math.floor(Math.random() * 40),
      startTime: [startTimeHours + 6, startTimeMinutes + 30],
      endTime: [startTimeHours + 8, startTimeMinutes + 30],
      durationHours: getDuration(startTimeHours + 1, startTimeHours + 3),
      durationMinutes: getDuration(startTimeMinutes + 30, startTimeMinutes + 30),
      startDate: startDate,
      endDate: endDate
    },
    {
      type: `Bus`,
      icon: partialPath + `bus.png`,
      point: sightseeings[Math.floor(Math.random() * sightseeings.length)],
      price: Math.floor(Math.random() * 50),
      startTime: [startTimeHours + 3, startTimeMinutes + 30],
      endTime: [startTimeHours + 3, startTimeMinutes + 30],
      durationHours: getDuration(startTimeHours + 3, startTimeHours + 3),
      durationMinutes: getDuration(startTimeMinutes + 30, startTimeMinutes + 30),
      startDate: startDate,
      endDate: endDate
    },
    {
      type: `Train`,
      icon: partialPath + `train.png`,
      point: cities[Math.floor(Math.random() * cities.length)],
      price: Math.floor(Math.random() * 30),
      startTime: [startTimeHours + 1, startTimeMinutes + 30],
      endTime: [startTimeHours + 3, startTimeMinutes + 30],
      durationHours: getDuration(startTimeHours + 1, startTimeHours + 3),
      durationMinutes: getDuration(startTimeMinutes + 30, startTimeMinutes + 30),
      startDate: startDate,
      endDate: endDate
    }

  ],

  activity: activity,
  transfer: transfer,


  options: [
    {
      type: `Add luggage`,
      value: `luggage`,
      price: Math.floor(Math.random() * 250),
      isChecked: Boolean(Math.round(Math.random()))
    },
    {
      type: `Switch to comfort class`,
      value: `class`,
      price: Math.floor(Math.random() * 250),
      isChecked: Boolean(Math.round(Math.random()))
    },
    {
      type: `Add meal`,
      value: `meal`,
      price: Math.floor(Math.random() * 5),
      isChecked: Boolean(Math.round(Math.random()))
    },
    {
      type: `Choose seats`,
      value: `seats`,
      price: Math.floor(Math.random() * 30),
      isChecked: Boolean(Math.round(Math.random()))
    }
  ],


  photos: photosArray.map(() => `http://picsum.photos/300/150?r=`),

  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `unc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ][Math.floor(Math.random() * 3)],
};
