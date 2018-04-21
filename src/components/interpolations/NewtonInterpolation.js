import React from "react";
import Interpolation from "./InterpolationComponent";

const NewtonInterpolation = props => (
  <Interpolation
    {...props}
    name="Interpolacja Newtona"
    interpolation={{
      load: data => {},
      calculate: x => {
        return x;
      }
    }}
  />
);

export default NewtonInterpolation;
