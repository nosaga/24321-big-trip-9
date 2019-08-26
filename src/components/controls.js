export const createControls = (controls) =>`
  <nav class="trip-controls__trip-tabs  trip-tabs">
  ${controls.map(control => `
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${control}</a>
    `
    ).join(``)}
  </nav>
`;
