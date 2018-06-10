import React from "react";
import Integration from "./IntegrationComponent";
import RectangleIntegration from "../../logic/integrations/rectangleIntegration";
const RectangleIntegrationComponent = props => (
  <Integration
    {...props}
    name="Całkowanie metodą prostokątków"
    integration={new RectangleIntegration()}
  />
);

export default RectangleIntegrationComponent;
