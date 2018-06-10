import React, { Component } from "react";
import Dropzone from "react-dropzone";
import {
  Container,
  Header,
  Segment,
  Grid,
  Input,
  Icon
} from "semantic-ui-react";
class InterpolationComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dropzoneActive: false,
      x: 0
    };
    this.calculate = this.calculate.bind(this);
  }

  calculate(interpolation, data, x) {
    interpolation.load(data);

    return interpolation.calculate(x);
  }

  onDragEnter() {
    this.setState({
      dropzoneActive: true
    });
  }

  onDragLeave() {
    this.setState({
      dropzoneActive: false
    });
  }

  onDrop(acceptedFiles) {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileAsBinaryString = reader.result;
        this.setState({
          data: JSON.parse(fileAsBinaryString),
          dropzoneActive: false
        });
      };
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");

      reader.readAsBinaryString(file);
    });
  }

  render() {
    const { data, dropzoneActive, x } = this.state;
    const { interpolation, name } = this.props;
    const result =
      data.length === 0 ? undefined : this.calculate(interpolation, data, x);
    return (
      <Container fluid>
        <Header as="h1">{name}</Header>
        {!dropzoneActive &&
          data.length === 0 && <span>Upuść plik by wczytać dane</span>}
        <Dropzone
          disableClick
          style={{
            border: "none",
            height: "70vh",
            textAlign: dropzoneActive ? "center" : "left"
          }}
          onDrop={this.onDrop.bind(this)}
          onDragEnter={this.onDragEnter.bind(this)}
          onDragLeave={this.onDragLeave.bind(this)}>
          {dropzoneActive && (
            <Icon name="cloud upload" size="big" color="teal" />
          )}
          {data.length > 0 && (
            <Segment.Group>
              <Segment tertiary>Wynik</Segment>
              <Segment>
                <Grid>
                  <Grid.Column width="2">
                    <Grid celled columns={2} textAlign="center">
                      <Grid.Row>
                        <Grid.Column>Dane</Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>x</Grid.Column>
                        <Grid.Column>y</Grid.Column>
                      </Grid.Row>
                      {data.map(point => (
                        <Grid.Row>
                          <Grid.Column>{point.x}</Grid.Column>
                          <Grid.Column>{point.y}</Grid.Column>
                        </Grid.Row>
                      ))}
                    </Grid>
                  </Grid.Column>
                  <Grid.Column width="14">
                    <Segment basic>
                      <Input
                        value={this.state.x}
                        placeholder="Szukany x"
                        onChange={e => this.setState({ x: e.target.value })}
                      />
                      <Header>x = {result}</Header>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Segment.Group>
          )}
        </Dropzone>
      </Container>
    );
  }
}
export default InterpolationComponent;
