export const createCards = ({tripRoute, options}) => `${tripRoute.map((trip) => `<li class="trip-events__item">
  <div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="${trip.icon}" alt="Event type icon">
    </div>
    <h3 class="event__title">${trip.type} ${trip.point}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${trip.startTime[0]}:${trip.startTime[1]}</time>
        —
        <time class="event__end-time" datetime="2019-03-18T11:00">${trip.endTime[0]}:${(trip.endTime[1])}</time>
      </p>
      <p class="event__duration">${trip.durationHours}H ${trip.durationMinutes}M</p>
    </div>
    <p class="event__price">
      €&nbsp;<span class="event__price-value">${trip.price}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
    ${options.map((option) =>` 
      <li class="event__offer">
        <span class="event__offer-title">${option.type}</span>
        +
        €&nbsp;<span class="event__offer-price">${option.price}</span>
       </li>
       `)[Math.floor(Math.random() * options.length)]}
    </ul>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
  </li>
  `).join(``)};
`;
