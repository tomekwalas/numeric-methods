import LagrangeInterpolation from "../../logic/interpolations/lagrangeInterpolation";

describe("Lagrange interpolation", () => {
  it("Should interpolate value", () => {
    const lagrange = new LagrangeInterpolation();
    const data = [
      {
        x: 1,
        y: 12
      },
      {
        x: 3,
        y: 4
      },
      {
        x: 5,
        y: 4
      }
    ];
    lagrange.load(data);

    const actual = lagrange.calculate(4);
    const expected = 3;
    expect(actual).toEqual(expected);
  });
});
