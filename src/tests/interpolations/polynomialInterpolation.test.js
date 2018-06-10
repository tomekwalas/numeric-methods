import PolynomialInterpolation from "../../logic/interpolations/polynomialInterpolation";

describe("Polynomial interpolation", () => {
  it("Should interpolate value", () => {
    const polynomial = new PolynomialInterpolation();
    const data = [
      {
        x: 2,
        y: 0
      },
      {
        x: 3,
        y: 2
      },
      {
        x: 5,
        y: 4
      }
    ];
    polynomial.load(data);

    const actual = polynomial.calculate(3);
    const expected = 2;
    expect(actual).toEqual(expected);
  });
});
