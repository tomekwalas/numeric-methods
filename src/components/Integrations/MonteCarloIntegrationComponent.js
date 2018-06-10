import React from "react";
import Integration from "./IntegrationComponent";
import MonteCarloIntegration from "../../logic/integrations/monteCarloIntegration";
const NewtonInterpolation = props => (
  <Integration
    {...props}
    name="Całkowanie metodą Monte Carlo"
    integration={new MonteCarloIntegration()}
  />
);

export default NewtonInterpolation;
