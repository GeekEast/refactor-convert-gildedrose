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
      // commodity that quality decrease as sellIn increase
      if (commodity.name !== COMMODITY_TYPE.AGED_BRIE && commodity.name !== COMMODITY_TYPE.BACKSTAGE_PASS) {
        if (commodity.quality > QUALITY_LIMIT.MIN) {
          if (commodity.name !== COMMODITY_TYPE.SULFURAS) {
            commodity.quality = commodity.quality - 1
          }
        }
      } else {
        if (commodity.quality < QUALITY_LIMIT.MAX) {
          commodity.quality = commodity.quality + 1
          if (commodity.name === COMMODITY_TYPE.BACKSTAGE_PASS) {
            if (commodity.sellIn < 11) {
              if (commodity.quality < QUALITY_LIMIT.MAX) {
                commodity.quality = commodity.quality + 1
              }
            }
            if (commodity.sellIn < 6) {
              if (commodity.quality < QUALITY_LIMIT.MAX) {
                commodity.quality = commodity.quality + 1
              }
            }
          }
        }
      }
      if (commodity.name !== COMMODITY_TYPE.SULFURAS) {
        commodity.sellIn = commodity.sellIn - 1
      }
      if (commodity.sellIn < QUALITY_LIMIT.MIN) {
        if (commodity.name !== COMMODITY_TYPE.AGED_BRIE) {
          if (commodity.name !== COMMODITY_TYPE.BACKSTAGE_PASS) {
            if (commodity.quality > QUALITY_LIMIT.MIN) {
              if (commodity.name !== COMMODITY_TYPE.SULFURAS) {
                commodity.quality = commodity.quality - 1
              }
            }
          } else {
            commodity.quality = commodity.quality - commodity.quality
          }
        } else {
          if (commodity.quality < QUALITY_LIMIT.MAX) {
            commodity.quality = commodity.quality + 1
          }
        }
      }
    }
  }
}
