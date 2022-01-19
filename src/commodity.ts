export class Commodity {
  protected _name: string
  protected _sellIn: number
  protected _quality: number

  constructor({ name, sellIn, quality }: { name: string; sellIn: number; quality: number }) {
    this._name = name
    this._sellIn = sellIn
    this._quality = quality
  }

  // * ======================= setter/getter ========================

  get sellIn() {
    return this._sellIn
  }

  get quality() {
    return this._quality
  }

  // the fallback
  holdOneDay() {
    this._sellIn -= 1
    const qualityDiff = this._sellIn < 0 ? -2 : -1
    this._quality = this._quality + qualityDiff < 0 ? 0 : this._quality + qualityDiff
  }
}
