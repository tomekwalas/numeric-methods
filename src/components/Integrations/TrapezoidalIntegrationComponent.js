import React from "react";
import Integration from "./IntegrationComponent";
import TrapezoidalIntegration from "../../logic/integrations/trapezoidalIntegration";
const TrapezoidalIntegrationComponent = props => (
  <Integration
    {...props}
    name="Całkowanie metodą trapezów"
    integration={new TrapezoidalIntegration()}
  />
);

export default TrapezoidalIntegrationComponent;
