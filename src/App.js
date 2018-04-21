import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Newton from "./components/interpolations/NewtonInterpolation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home>
          <Route path="/interpolation/newton" component={Newton} />
        </Home>
      </BrowserRouter>
    );
  }
}

export default App;
