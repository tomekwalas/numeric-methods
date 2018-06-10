import BaseInterpolation from "./baseInterpolation";

class LagrangeInterpolation extends BaseInterpolation {
  factor(i) {
    let result = 1;
    for (let j = 0; j < this.data.length; j++) {
      if (i === j) {
        continue;
      }

      result *= (this.x - this.data[j].x) / (this.data[i].x - this.data[j].x);
    }

    return result;
  }

  calculate(x) {
    this.x = x;
    let result = 0;
    for (let i = 0; i < this.data.length; i++) {
      result += this.data[i].y * this.factor(i);
    }

    return result;
  }
}

export default LagrangeInterpolation;
