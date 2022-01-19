import { Item } from "./item"

export enum ITEM_TYPE {
  BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  AGED_BRIE = "Aged Brie",
  CONJURED = "Conjured"
}

export class GildedRose {
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

  update_quality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name !== ITEM_TYPE.AGED_BRIE && this.items[i].name !== ITEM_TYPE.BACKSTAGE_PASS) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name !== ITEM_TYPE.SULFURAS) {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name === ITEM_TYPE.BACKSTAGE_PASS) {
            if (this.items[i].sell_in < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sell_in < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name !== ITEM_TYPE.SULFURAS) {
        this.items[i].sell_in = this.items[i].sell_in - 1
      }
      if (this.items[i].sell_in < 0) {
        if (this.items[i].name !== ITEM_TYPE.AGED_BRIE) {
          if (this.items[i].name !== ITEM_TYPE.BACKSTAGE_PASS) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name !== ITEM_TYPE.SULFURAS) {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }
  }
}
