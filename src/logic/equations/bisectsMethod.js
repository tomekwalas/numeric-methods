class Bisects {
  constructor(func, a, b, accuracy) {
    this.func = func;
    this.a = a;
    this.b = b;
    this.accuracy = accuracy;
  }

  calculate() {
    let x;
    while (Math.abs(this.a - this.b) > this.accuracy) {
      x = (this.a + this.b) / 2;
      if (this.func(x) === 0) return x;

      if (this.func(x) * this.func(this.a) < 0) this.b = x;
      else if (this.func(x) * this.func(this.b) < 0) this.a = x;
    }

    return x;
  }
}

module.exports = Bisects;
