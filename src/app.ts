import { Commodity } from "./commodity"
import { GildedRoseStore } from "./gilded-rose"

const commodities = [
  new Commodity({ name: "+5 Dexterity Vest", sellIn: 10, quality: 20 }), //
  new Commodity({ name: "Aged Brie", sellIn: 2, quality: 0 }), //
  new Commodity({ name: "Elixir of the Mongoose", sellIn: 5, quality: 7 }), //
  new Commodity({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }), //
  new Commodity({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 }),
  new Commodity({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20 }),
  new Commodity({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 49 }),
  new Commodity({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 49 }),
  new Commodity({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 1, quality: 20 }),
  // this conjured item does not work properly yet
  new Commodity({ name: "Conjured Mana Cake", sellIn: 3, quality: 6 })
]

const app = new GildedRoseStore(commodities)
const days = 3
const result = []

result.push("OMGHAI")
for (let i = 0; i < days; i++) {
  result.push(`-------- day ${i} --------`)
  result.push("name, sellIn, quality")
  for (const item of commodities) {
    result.push(item.toString())
  }
  result.push("")
  app.updateAllCommoditiesPerDay()
}

console.log(result.join("\n"))
