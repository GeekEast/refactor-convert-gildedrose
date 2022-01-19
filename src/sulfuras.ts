import { Commodity } from "./commodity"

export class Sulfuras extends Commodity {
  constructor(consParam: { name: string; sellIn: number; quality: number }) {
    super(consParam)
  }

  holdOneDay() {
    // override the default behavior
  }
}
