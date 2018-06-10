import BaseIntegrarion from "./baseIntegration";

class TrapezoidalIntegration extends BaseIntegrarion {
  calculate() {
    let result = 0;
    for (let i = this.xp; i < this.xk; i++) {
      result += ((this.func(i) + this.func(i + 1)) / 2) * this.dx;
    }
    return result;
  }
}

export default TrapezoidalIntegration;
