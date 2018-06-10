import React from "react";
import Interpolation from "./InterpolationComponent";
import PolynomiaInterpolation from "../../logic/interpolations/polynomialInterpolation";

const PolynomialInterpolationComponent = props => (
  <Interpolation
    {...props}
    name="Interpolacja Wielomianowa"
    interpolation={new PolynomiaInterpolation()}
  />
);

export default PolynomialInterpolationComponent;
