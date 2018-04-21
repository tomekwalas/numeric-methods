import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

export default class Home extends Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={["interpolation", "integration"]}>
            <SubMenu key="interpolation" title={<span>Interpolacje</span>}>
              <Menu.Item key="newton">
                <Link to="/interpolation/newton">Newtona</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/interpolation/lagrange">Lagrange'a</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/interpolation/polynomial">Wielomianowa</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="integration" title={<span>Całkowanie</span>}>
              <Menu.Item>
                <Link to="/integration/rectangle">Prostokąty</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/integration/trapeze">Trapez</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/integration/simpson">Simpson</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/integration/monte-carlo">Monte Carlo</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
