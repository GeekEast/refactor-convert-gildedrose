import { Commodity } from "./commodity"

export enum COMMODITY_TYPE {
  BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
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
      if (commodity.name === COMMODITY_TYPE.SULFURAS) {
        continue
      }

      // aged brie
      if (commodity.name === COMMODITY_TYPE.AGED_BRIE) {
        commodity.sellIn -= 1
        const qualityDiff = commodity.sellIn < 0 ? 2 : 1
        if (commodity.quality < 50) commodity.quality += qualityDiff
        continue
      }

      // backstage pass
      if (commodity.name === COMMODITY_TYPE.BACKSTAGE_PASS) {
        commodity.sellIn -= 1
        if (commodity.quality > 0 && commodity.quality < 50) {
          if (commodity.sellIn >= 10) {
            if (commodity.quality <= 49) commodity.quality += 1
            continue
          }

          if (commodity.sellIn >= 5) {
            if (commodity.quality <= 48) {
              commodity.quality += 2
            } else {
              commodity.quality = 50
            }
            continue
          }

          if (commodity.sellIn >= 0) {
            if (commodity.quality <= 47) {
              commodity.quality += 3
            } else {
              commodity.quality = 50
            }
            continue
          }

          commodity.quality = 0
        }
        continue
      }

      // other
      commodity.sellIn -= 1
      const qualityDiff = commodity.sellIn < 0 ? -2 : -1
      if (commodity.quality > 0 && commodity.quality < 50) {
        commodity.quality += qualityDiff
      }
    }
  }
}
