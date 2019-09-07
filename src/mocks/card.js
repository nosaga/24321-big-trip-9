import {cities, photosArray} from '../constants';

export const card = () => ({
  point: {
    basePrice: Math.floor(Math.random() * 1000),
    dateFrom: new Date(`2019-07-10T22:55:56.845Z`),
    dateTo: new Date(`2019-07-11T11:22:13.375Z`),
    destination: {
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
      name: cities[Math.floor(Math.random() * cities.length)],
      photos: [
        {
          src: photosArray.map(() => `http://picsum.photos/300/150?r=`),
        }
      ]
    },
    isFavorite: Boolean(Math.round(Math.random())),
    offers: {
      type: [`Taxi`, `Bus`, `Train`, `Flight`, `Check-in`, `Sightseeing`][Math.floor(Math.random() * 6)],
      offer: [
        {
          name: [`Upgrade to a business class`, `Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`][Math.floor(Math.random() * 5)],
          price: Math.floor(Math.random() * 250)
        }, {
          name: [`Upgrade to a business class`, `Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`][Math.floor(Math.random() * 5)],
          price: Math.floor(Math.random() * 250)
        }
      ]
    },
    type: [`Taxi`, `Bus`, `Train`, `Flight`, `Check-in`, `Sightseeing`][Math.floor(Math.random() * 6)]
  },
});
