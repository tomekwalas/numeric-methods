const HeunMethod = require("../../logic/equations/heunMethod");

describe("Heun method tests", () => {
  it("should return proper value", () => {
    const heunMethod = new HeunMethod();

    const f = (x, y) => Math.cos(x) - Math.sin(x) - y;
    const x0 = 0;
    const y0 = 2;
    const b = 0.3;
    const h = 0.1;

    const response = heunMethod.calculate({ b, x0, y0, h, f });
  });
});
