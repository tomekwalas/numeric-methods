import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import LagrangeInterpolationComponent from "./components/interpolations/LagrangeInterpolationComponent";
import NewtonInterpolation from "./components/interpolations/NewtonInterpolation";
import PolynomialInterpolation from "./components/interpolations/PolynomialInterpolationComponent";
import MonteCarloIntegration from "./components/Integrations/MonteCarloIntegrationComponent";
import TrapezoidalIntegration from "./components/Integrations/TrapezoidalIntegrationComponent";
import RectangleIntegration from "./components/Integrations/RectangleIntegrationComponent";
import SimpsonIntegrationComponent from "./components/Integrations/SimpsonIntegrationComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Home>
            <Route
              path="/interpolations/lagrange"
              component={LagrangeInterpolationComponent}
            />
            <Route
              path="/interpolations/newton"
              component={NewtonInterpolation}
            />
            <Route
              path="/interpolations/polynomial"
              component={PolynomialInterpolation}
            />
            <Route
              path="/integrations/monte-carlo"
              component={MonteCarloIntegration}
            />
            <Route
              path="/integrations/trapezoidal"
              component={TrapezoidalIntegration}
            />
            <Route
              path="/integrations/rectangle"
              component={RectangleIntegration}
            />
            <Route
              path="/integrations/simpson"
              component={SimpsonIntegrationComponent}
            />
          </Home>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
