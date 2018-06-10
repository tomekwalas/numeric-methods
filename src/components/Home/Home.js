import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Segment, Grid } from "semantic-ui-react";
import SideMenu from "../SideMenu/SideMenu";

export default class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Grid>
          <Grid.Column width="3">
            <SideMenu activeTab={this.props.location.pathname} />
          </Grid.Column>
          <Grid.Column width="13">
            <Segment basic>{this.props.children}</Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
