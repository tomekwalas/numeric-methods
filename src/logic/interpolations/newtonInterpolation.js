import BaseInterpolation from "./baseInterpolation";

class NewtonInterpolation extends BaseInterpolation {
  constructor() {
    super();
    this.differentialQuotients = [];
  }
  getDifferentialQuotients() {
    for (let i = 0; i < this.data.length; i++) {
      let values = [];
      for (let j = 0; j < this.data.length - i - 1; j++) {
        if (i === 0) {
          const result =
            (this.data[j + 1].y - this.data[j].y) /
            (this.data[j + 1].x - this.data[j].x);

          values.push(result);
        } else {
          const result =
            (this.differentialQuotients[i - 1][j + 1] -
              this.differentialQuotients[i - 1][j]) /
            (this.data[j + i + 1].x - this.data[j].x);

          values.push(result);
        }
      }

      this.differentialQuotients.push(values);
    }
  }
  calculate(x) {
    this.getDifferentialQuotients();

    let result = this.data[0].y;
    for (let i = 0; i < this.data.length - 1; i++) {
      let tmp = this.differentialQuotients[i][0];

      for (let j = 0; j <= i; j++) {
        tmp *= x - this.data[j].x;
      }

      result += tmp;
    }

    return result;
  }
}

export default NewtonInterpolation;
