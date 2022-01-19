import { AgedBrie } from "./commodity/agedbrie"
import { BackstagePass } from "./commodity/backstagePasses"
import { Commodity } from "./commodity/commodity"
import { Conjured } from "./commodity/conjured"
import { Sulfuras } from "./commodity/sulfuras"
import { GildedRoseStore } from "./gilded-rose"

describe("GildedRoseStore", () => {
  it("should behave all good after 5 days in new mode", () => {
    const com1 = new Commodity({ name: "+5 Dexterity Vest", sellIn: 10, quality: 20 })
    const com2 = new AgedBrie({ name: "Aged Brie", sellIn: 2, quality: 0 })
    const com3 = new Commodity({ name: "Elixir of the Mongoose", sellIn: 5, quality: 7 })
    const com4 = new Sulfuras({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 })
    const com5 = new Sulfuras({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 })
    const com6 = new BackstagePass({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20 })
    const com7 = new BackstagePass({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 49 })
    const com8 = new BackstagePass({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 49 })
    const com9 = new BackstagePass({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 1, quality: 20 })
    const com10 = new Conjured({ name: "Conjured Mana Cake", sellIn: 3, quality: 6 })

    const commodities = [com1, com2, com3, com4, com5, com6, com7, com8, com9, com10]
    const store = new GildedRoseStore(commodities)

    const day1Data = [
      [com1, 9, 19],
      [com2, 1, 1],
      [com3, 4, 6],
      [com4, 0, 80],
      [com5, -1, 80],
      [com6, 14, 21],
      [com7, 9, 50],
      [com8, 4, 50],
      [com9, 0, 23],
      [com10, 2, 4]
    ]
    const day2Data = [
      [com1, 8, 18],
      [com2, 0, 2],
      [com3, 3, 5],
      [com4, 0, 80],
      [com5, -1, 80],
      [com6, 13, 22],
      [com7, 8, 50],
      [com8, 3, 50],
      [com9, -1, 0],
      [com10, 1, 2]
    ]
    const day3Data = [
      [com1, 7, 17],
      [com2, -1, 4],
      [com3, 2, 4],
      [com4, 0, 80],
      [com5, -1, 80],
      [com6, 12, 23],
      [com7, 7, 50],
      [com8, 2, 50],
      [com9, -2, 0],
      [com10, 0, 0]
    ]
    const day4Data = [
      [com1, 6, 16],
      [com2, -2, 6],
      [com3, 1, 3],
      [com4, 0, 80],
      [com5, -1, 80],
      [com6, 11, 24],
      [com7, 6, 50],
      [com8, 1, 50],
      [com9, -3, 0],
      [com10, -1, 0]
    ]
    const day5Data = [
      [com1, 5, 15],
      [com2, -3, 8],
      [com3, 0, 2],
      [com4, 0, 80],
      [com5, -1, 80],
      [com6, 10, 25],
      [com7, 5, 50],
      [com8, 0, 50],
      [com9, -4, 0],
      [com10, -2, 0]
    ]

    const daysData = [day1Data, day2Data, day3Data, day4Data, day5Data]
    daysData.forEach((dayData, dayIdx) => {
      store.updateAllCommoditiesPerDay()
      dayData.forEach((data, commodityIdx) => {
        const commodity = data[0] as Commodity
        const expectedSellIn = data[1]
        const expectedQuality = data[2]
        console.log(`Day ${dayIdx + 1} Commodity ${commodityIdx + 1}`)
        console.log(commodity)
        expect(commodity.sellIn).toEqual(expectedSellIn)
        expect(commodity.quality).toEqual(expectedQuality)
      })
    })
  })
})
