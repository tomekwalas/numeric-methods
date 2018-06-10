import BaseInterpolation from "./baseInterpolation";

class PolynomialInterpolation extends BaseInterpolation {
  constructor() {
    super();
    this.matrix = [];
    this.results = [];
  }
  calculate(x) {
    this.matrix = [];
    this.results = [];
    const polynomial = this.generatePolynomial();

    return polynomial(x);
  }

  generatePolynomial() {
    const result = this.calculateCoefficients();
    return function(x) {
      return result.x * x * x + result.y * x + result.z;
    };
  }

  calculateCoefficients() {
    this.generateMatrix();
    let w = this.calculateDeterminant(-1);
    let wx = this.calculateDeterminant(0);
    let wy = this.calculateDeterminant(1);
    let wz = this.calculateDeterminant(2);

    const x = wx / w;
    const y = wy / w;
    const z = wz / w;

    return {
      x,
      y,
      z
    };
  }

  generateMatrix() {
    this.matrix.push([
      Math.pow(this.data[0].x, 2),
      Math.pow(this.data[1].x, 2),
      Math.pow(this.data[2].x, 2)
    ]);
    this.matrix.push([this.data[0].x, this.data[1].x, this.data[2].x]);
    this.matrix.push([1, 1, 1]);

    for (let i = 0; i < this.data.length; i++) {
      this.results.push(this.data[i].y);
    }
  }

  calculateDeterminant(index) {
    let matrix = [...this.matrix];
    let determinant = 0;
    if (index !== -1) {
      matrix[index] = this.results;
    }

    matrix.push(matrix[0]);
    matrix.push(matrix[1]);

    for (let i = 0; i < this.data.length; i++) {
      let mnozenie = 1;
      for (let j = 0; j < this.data.length; j++) {
        mnozenie *= matrix[i + j][j];
      }

      determinant += mnozenie;
    }

    for (let i = matrix.length - 1; i >= 2; i--) {
      let mnozenie = 1;
      for (let j = 0; j < this.data.length; j++) {
        mnozenie *= matrix[i - j][j];
      }
      determinant -= mnozenie;
    }

    return determinant;
  }
}

export default PolynomialInterpolation;
