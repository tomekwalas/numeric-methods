import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class SideMenu extends Component {
  handleItemClick = name => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state || {};

    return (
      <Menu vertical fixed="left">
        <Menu.Item>
          <Menu.Header>Interpolacje</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="Lagrange'a"
              as={Link}
              to="/interpolations/lagrange"
              active={activeItem === "/interpolations/lagrange"}
            />
            <Menu.Item
              name="Newtona"
              as={Link}
              to="/interpolations/newton"
              active={activeItem === "newton"}
            />
            <Menu.Item
              name="Wielomianowa"
              as={Link}
              to="/interpolations/polynomial"
              active={activeItem === "polynomial"}
            />
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Całkowanie numeryczne</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="Metoda trapezów"
              as={Link}
              to="/integrations/trapezoidal"
              active={activeItem === "trapezoidal"}
            />
            <Menu.Item
              name="Metoda prostokątków"
              as={Link}
              to="/integrations/rectangle"
              active={activeItem === "triangle"}
            />
            <Menu.Item
              name="Monte Carlo"
              as={Link}
              to="/integrations/monte-carlo"
              active={activeItem === "monte-carlo"}
            />
            <Menu.Item
              name="Simpsona"
              as={Link}
              to="/integrations/simpson"
              active={activeItem === "simpson"}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Układy równań</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="Metoda bisekcji"
              active={activeItem === "shared"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Metoda Newtona-Raphsona"
              active={activeItem === "dedicated"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Metoda Rungego-Kutty"
              active={activeItem === "dedicated"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Metoda Heuna"
              active={activeItem === "dedicated"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Metoda Rungego-Kutty 4"
              active={activeItem === "dedicated"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}

export default SideMenu;
