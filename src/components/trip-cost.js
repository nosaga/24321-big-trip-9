import {AbstractComponent} from "./abstract-component";

export class TripCost extends AbstractComponent {
  constructor(cost) {
    super();
    this._cost = cost;
  }

  getTemplate() {
    return `<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${this._cost}</span>
            </p>`;
  }
}
