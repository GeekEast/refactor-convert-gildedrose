import { Commodity } from "./commodity"

export class Conjured extends Commodity {
  constructor(consParam: { name: string; sellIn: number; quality: number }) {
    super(consParam)
  }

  holdOneDay() {
    this._sellIn -= 1
    this._quality = this._quality - 2 < 0 ? 0 : this._quality - 2
  }
}
