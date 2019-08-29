import {monthNames} from '../mocks/constants';
import {startMonth} from '../mocks/constants';

export const getDuration = (start, end) => end - start;
export const getMonth = () => monthNames[startMonth];

export function setActiveStatuses(options = []) {
  const maxActiveOptionsNumber = 2;
  const activeOptionsNumber = Math.floor(Math.random() * (maxActiveOptionsNumber + 1));

  if (activeOptionsNumber) {
    for (let i = 0; i < activeOptionsNumber; i++) {
      options[Math.floor(Math.random() * options.length)].isChecked = true;
    }
  }
}
