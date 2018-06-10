import BaseIntegration from "./baseIntegration";

class MonteCarloIntegration extends BaseIntegration {
  calculateAvgFunction() {
    let result = 0;
    for (let i = 0; i < this.n; i++) {
      const x = Math.random() * (this.xk - this.xp) + this.xp;
      result += this.func(x) / this.n;
    }

    return result;
  }

  calculate() {
    let avgFunction = this.calculateAvgFunction();
    return avgFunction * Math.abs(this.xk - this.xp);
  }
}

export default MonteCarloIntegration;
