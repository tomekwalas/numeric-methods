import BaseIntegrarion from "./baseIntegration";

class SimpsonIntegration extends BaseIntegrarion {
  calculateSimpleSimpson(x1, x2, x3) {
    return (this.func(x1) + 4 * this.func(x2) + this.func(x3)) * (this.h / 3);
  }

  calculate() {
    let result = 0;
    for (let i = 1; i <= this.xk - 2; i = i + 2) {
      result += this.calculateSimpleSimpson(i, i + 1, i + 2);
    }

    return result;
  }
}

export default SimpsonIntegration;
