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
    for (const item of this._commodities) {
      // item that quality decrease as sellIn increase
      if (item.name !== COMMODITY_TYPE.AGED_BRIE && item.name !== COMMODITY_TYPE.BACKSTAGE_PASS) {
        if (item.quality > QUALITY_LIMIT.MIN) {
          if (item.name !== COMMODITY_TYPE.SULFURAS) {
            item.quality = item.quality - 1
          }
        }
      } else {
        if (item.quality < QUALITY_LIMIT.MAX) {
          item.quality = item.quality + 1
          if (item.name === COMMODITY_TYPE.BACKSTAGE_PASS) {
            if (item.sellIn < 11) {
              if (item.quality < QUALITY_LIMIT.MAX) {
                item.quality = item.quality + 1
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < QUALITY_LIMIT.MAX) {
                item.quality = item.quality + 1
              }
            }
          }
        }
      }
      if (item.name !== COMMODITY_TYPE.SULFURAS) {
        item.sellIn = item.sellIn - 1
      }
      if (item.sellIn < QUALITY_LIMIT.MIN) {
        if (item.name !== COMMODITY_TYPE.AGED_BRIE) {
          if (item.name !== COMMODITY_TYPE.BACKSTAGE_PASS) {
            if (item.quality > QUALITY_LIMIT.MIN) {
              if (item.name !== COMMODITY_TYPE.SULFURAS) {
                item.quality = item.quality - 1
              }
            }
          } else {
            item.quality = item.quality - item.quality
          }
        } else {
          if (item.quality < QUALITY_LIMIT.MAX) {
            item.quality = item.quality + 1
          }
        }
      }
    }
  }
}
