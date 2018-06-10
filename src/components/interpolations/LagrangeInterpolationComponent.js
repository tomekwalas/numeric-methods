import React from "react";
import Interpolation from "./InterpolationComponent";
import LagrangeInterpolation from "../../logic/interpolations/lagrangeInterpolation";

const LagrangeInterpolationComponent = props => (
  <Interpolation
    {...props}
    name="Interpolacja Lagrange'a"
    interpolation={new LagrangeInterpolation()}
  />
);

export default LagrangeInterpolationComponent;
