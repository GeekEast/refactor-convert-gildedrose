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
      // sulfuras
      if (commodity.name.includes(COMMODITY_TYPE.SULFURAS)) {
        continue
      }

      // aged brie
      if (commodity.name.includes(COMMODITY_TYPE.AGED_BRIE)) {
        commodity.sellIn -= 1
        const qualityDiff = commodity.sellIn < 0 ? 2 : 1
        if (commodity.quality < 50) commodity.quality += qualityDiff
        continue
      }

      // backstage pass
      if (commodity.name.includes(COMMODITY_TYPE.BACKSTAGE_PASS)) {
        commodity.sellIn -= 1
        if (commodity.quality >= 50) continue

        if (commodity.sellIn >= 10) {
          commodity.quality = commodity.quality + 1 > 50 ? 50 : commodity.quality + 1
          continue
        }

        if (commodity.sellIn >= 5) {
          commodity.quality = commodity.quality + 2 > 50 ? 50 : commodity.quality + 2
          continue
        }

        if (commodity.sellIn >= 0) {
          commodity.quality = commodity.quality + 3 > 50 ? 50 : commodity.quality + 3
          continue
        }

        commodity.quality = 0
        continue
      }

      // conjured
      if (commodity.name.includes(COMMODITY_TYPE.CONJURED)) {
        commodity.sellIn -= 1
        if (commodity.quality > 0) commodity.quality = commodity.quality - 2 < 0 ? 0 : commodity.quality - 2
        continue
      }

      // fallback
      commodity.sellIn -= 1
      const qualityDiff = commodity.sellIn < 0 ? -2 : -1
      if (commodity.quality > 0 && commodity.quality < 50) {
        commodity.quality += qualityDiff
      }
    }
  }
}
