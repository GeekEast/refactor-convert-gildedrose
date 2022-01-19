import { Commodity } from "./commodity"

export class BackstagePass extends Commodity {
  constructor(consParam: { name: string; sellIn: number; quality: number }) {
    super(consParam)
  }

  holdOneDay() {
    this._sellIn -= 1

    if (this._sellIn >= 10) {
      this._quality = this._quality + 1 > 50 ? 50 : this._quality + 1
      return
    }

    if (this._sellIn >= 5) {
      this._quality = this._quality + 2 > 50 ? 50 : this._quality + 2
      return
    }

    if (this._sellIn >= 0) {
      this._quality = this._quality + 3 > 50 ? 50 : this._quality + 3
      return
    }

    this._quality = 0
    return
  }
}
