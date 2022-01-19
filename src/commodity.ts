export class Commodity {
  private _name: string
  private _sellIn: number
  private _quality: number

  constructor({ name, sellIn, quality }: { name: string; sellIn: number; quality: number }) {
    this._name = name
    this._sellIn = sellIn
    this._quality = quality
  }

  // * ======================= setter/getter ========================
  get name() {
    return this._name
  }

  // set name(val: string) {
  //   this._name = val
  // }

  get sellIn() {
    return this._sellIn
  }

  set sellIn(val: number) {
    this._sellIn = val
  }

  get quality() {
    return this._quality
  }

  set quality(val: number) {
    this._quality = val
  }

  // * ======================= other methods ========================
  // toString() {
  //   return `${this.name}, SellIn: ${this.sellIn}, Quality ${this.quality}`
  // }
}
