import { Commodity } from "./commodity"

export class AgedBrie extends Commodity {
  constructor(consParam: { name: string; sellIn: number; quality: number }) {
    super(consParam)
  }

  holdOneDay() {
    this._sellIn -= 1
    const qualityDiff = this._sellIn < 0 ? 2 : 1
    this._quality = this._quality + qualityDiff > 50 ? 50 : this._quality + qualityDiff
  }
}
