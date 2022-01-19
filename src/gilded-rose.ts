import { Item } from "./item"

export enum ITEM_TYPE {
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
  private _items: Item[]
  constructor(items: Item[]) {
    this._items = items
  }

  public get items(): Item[] {
    return this._items
  }

  public set items(items: Item[]) {
    this._items = items
  }

  updateAllItemsPerDay() {
    for (const item of this._items) {
      // item that quality decrease as sellIn increase
      if (item.name !== ITEM_TYPE.AGED_BRIE && item.name !== ITEM_TYPE.BACKSTAGE_PASS) {
        if (item.quality > QUALITY_LIMIT.MIN) {
          if (item.name !== ITEM_TYPE.SULFURAS) {
            item.quality = item.quality - 1
          }
        }
      } else {
        if (item.quality < QUALITY_LIMIT.MAX) {
          item.quality = item.quality + 1
          if (item.name === ITEM_TYPE.BACKSTAGE_PASS) {
            if (item.sell_in < 11) {
              if (item.quality < QUALITY_LIMIT.MAX) {
                item.quality = item.quality + 1
              }
            }
            if (item.sell_in < 6) {
              if (item.quality < QUALITY_LIMIT.MAX) {
                item.quality = item.quality + 1
              }
            }
          }
        }
      }
      if (item.name !== ITEM_TYPE.SULFURAS) {
        item.sell_in = item.sell_in - 1
      }
      if (item.sell_in < QUALITY_LIMIT.MIN) {
        if (item.name !== ITEM_TYPE.AGED_BRIE) {
          if (item.name !== ITEM_TYPE.BACKSTAGE_PASS) {
            if (item.quality > QUALITY_LIMIT.MIN) {
              if (item.name !== ITEM_TYPE.SULFURAS) {
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
