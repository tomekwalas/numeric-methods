import React from "react";
import Interpolation from "./InterpolationComponent";
import NewtonInterpolation from "../../logic/interpolations/newtonInterpolation";

const NewtonInterpolationComponent = props => (
  <Interpolation
    {...props}
    name="Interpolacja Newtona"
    interpolation={new NewtonInterpolation()}
  />
);

export default NewtonInterpolationComponent;
