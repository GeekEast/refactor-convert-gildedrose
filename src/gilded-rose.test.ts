import { GildedRoseStore } from "./gilded-rose"
import { Item } from "./item"

describe("GildedRoseTest", () => {
  it("foo", () => {
    const items = [new Item("foo", 1, 5)]

    const app = new GildedRoseStore(items)
    app.updateAllItemsPerDay()

    expect(app.items[0].name).toEqual("foo")
    expect(app.items[0].quality).toEqual(4)
    expect(app.items[0].sell_in).toEqual(0)
  })
})
