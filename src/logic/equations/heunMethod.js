class HeunMethod {
  calculate({ b, x0, y0, h, f }) {
    const n = (b - x0) / h;
    let x, y;

    for (let i = 0; i < n; i++) {
      if (i === 0) {
        const result = this.calculateOne(x0, y0, f, (i + 1) * h);
        x = result.x;
        y = result.y;
      } else {
        const result = this.calculateOne(x, y, f, (i + 1) * h);
        x = result.x;
        y = result.y;
      }
    }

    return y;
  }

  calculateOne(x, y, f, h) {
    return {
      x: x + h,
      y: this.getY(x, y, f, h)
    };
  }

  getY(x, y, f, h) {
    return y + h / 2 * (f(x, y) + f(x + h, y + h * f(x, y)));
  }
}

module.exports = HeunMethod;
