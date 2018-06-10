class NewtonRaphson {
  constructor(func, pochfunc, a, b, accuracy) {
    this.func = func;
    this.pochfunc = pochfunc;
    this.a = a;
    this.b = b;
    this.accuracy = accuracy;
  }

  calculate() {
    return this.recurrent(1);
  }

  recurrent(x) {
    if (Math.abs(this.func(x) <= this.accuracy)) {
      return x;
    }

    const xx = x - this.func(x) / this.pochfunc(x);

    return this.recurrent(xx);
  }
}

module.exports = NewtonRaphson;
