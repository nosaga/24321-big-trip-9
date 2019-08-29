import {startDate, endDate} from '../mocks/constants';
import {getMonth} from '../helpers/helper-functions';

export const getCardRoute = () => ({
  cityStart: [`Geneva`, `Chamonix`, `Amsterdam`, `Brussels`, `Stockholm`][Math.floor(Math.random() * 5)],
  cityTransfer: [``, `Chamonix`, ``, `Brussels`, `Stockholm`][Math.floor(Math.random() * 5)],
  cityEnd: [`Geneva`, `Chamonix`, `Amsterdam`, `Brussels`, `Stockholm`][Math.floor(Math.random() * 5)],
  startMonth: getMonth(),
  startDate: startDate,
  endDate: endDate
});
