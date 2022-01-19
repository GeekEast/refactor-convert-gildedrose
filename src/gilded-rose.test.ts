import { Commodity } from "./commodity"
import { COMMODITY_TYPE, GildedRoseStore } from "./gilded-rose"

describe("GildedRoseTest", () => {
  it("foo", () => {
    const commodities = [new Commodity({ name: "foo", sellIn: 1, quality: 5 })]

    const app = new GildedRoseStore(commodities)
    app.updateAllCommoditiesPerDay()

    expect(app.commodities[0].name).toEqual("foo")
    expect(app.commodities[0].quality).toEqual(4)
    expect(app.commodities[0].sellIn).toEqual(0)
  })

  it("Aged Brie quality will increase after one day", () => {
    const mockedAgedBrie = new Commodity({ name: COMMODITY_TYPE.AGED_BRIE, sellIn: 1, quality: 2 })
  })
})
