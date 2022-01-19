import { Commodity } from "./commodity/commodity"

export class GildedRoseStore {
  private _commodities: Commodity[]
  constructor(commodities: Commodity[]) {
    this._commodities = commodities
  }

  updateAllCommoditiesPerDay() {
    for (const commodity of this._commodities) {
      commodity.holdOneDay()
    }
  }
}
