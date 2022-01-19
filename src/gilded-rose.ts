import { Commodity } from "./commodity"

export enum COMMODITY_TYPE {
  BACKSTAGE_PASS = "Backstage passes",
  SULFURAS = "Sulfuras",
  AGED_BRIE = "Aged Brie",
  CONJURED = "Conjured"
}

export enum QUALITY_LIMIT {
  MAX = 50,
  MIN = 0
}

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
