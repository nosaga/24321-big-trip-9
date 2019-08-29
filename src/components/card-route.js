export const createCardRoute = ({cityStart, cityTransfer, cityEnd, startMonth, startDate, endDate}) => `
  <div class="trip-info__main">
    <h1 class="trip-info__title">${cityStart} &mdash; ${cityTransfer !== ``? `...&mdash;` : ``}   ${cityEnd}</h1>
    <p class="trip-info__dates">${startMonth} ${startDate.getUTCDate()}&nbsp;—&nbsp;${endDate.getUTCDate()}</p>
  </div>
  `;

