import BaseIntegrarion from "./baseIntegration";

class RectangleIntegration extends BaseIntegrarion {
  calculate() {
    let result = 0;
    for (let i = this.xp + 1; i <= this.xk; i++) {
      result += this.func(i);
    }

    result *= this.dx;
    return result;
  }
}

export default RectangleIntegration;
