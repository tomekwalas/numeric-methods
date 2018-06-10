import React from "react";
import Integration from "./IntegrationComponent";
import SimpsonIntegration from "../../logic/integrations/simpsonIntegration";
const SimpsonIntegrationComponent = props => (
  <Integration
    {...props}
    name="Całkowanie metodą Simpsona"
    integration={new SimpsonIntegration()}
  />
);

export default SimpsonIntegrationComponent;
