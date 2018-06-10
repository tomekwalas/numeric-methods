import NewtonInterpolation from "../../logic/interpolations/newtonInterpolation";

describe("Newton interpolation", () => {
  it("Should interpolate value", () => {
    const newton = new NewtonInterpolation();
    const data = [
      {
        x: -2,
        y: -1
      },
      {
        x: -1,
        y: 0
      },
      {
        x: 0,
        y: 5
      },
      {
        x: 2,
        y: 99
      },
      {
        x: 4,
        y: -55
      }
    ];
    newton.load(data);

    const actual = newton.calculate(1);
    const expected = 44;
    expect(actual).toEqual(expected);
  });
});
