export const createCardRoute = ({cityStart, cityEnd, startMonth, startDate, endDate}) =>`
  <div class="trip-info__main">
    <h1 class="trip-info__title">${cityStart} &mdash; ... &mdash;  ${cityEnd}</h1>
    <p class="trip-info__dates">${startMonth} ${startDate.getUTCDate()}&nbsp;—&nbsp;${endDate.getUTCDate()}</p>
  </div>
  `;

