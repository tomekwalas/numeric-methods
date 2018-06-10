import React, { Component } from "react";
import MyFileReader from "../../utils/fileReader";
import Dropzone from "react-dropzone";
import { Segment, Container, Header, Icon } from "semantic-ui-react";

export default class InterpolationComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      dropzoneActive: false
    };
    this.calculate = this.calculate.bind(this);
  }

  printObject(data) {
    const view = [];
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        view.push(<p>{key + ":" + data[key]}</p>);
      }
    }

    return view;
  }

  calculate(integration) {
    const { data } = this.state;
    integration.load(data);
    return integration.calculate();
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
        const fileReader = new MyFileReader();
        const fileAsBinaryString = reader.result;
        this.setState({
          data: fileReader.read(fileAsBinaryString),
          dropzoneActive: false
        });
      };
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");

      reader.readAsBinaryString(file);
    });
  }

  render() {
    const { data, dropzoneActive } = this.state;
    const { integration, name } = this.props;
    const result =
      !data || data.length === 0 ? undefined : this.calculate(integration);
    return (
      <Container fluid>
        <Header as="h1">{name}</Header>
        {!dropzoneActive && !data && <span>Upuść plik by wczytać dane</span>}
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
          {data && (
            <Segment.Group>
              <Segment tertiary>Dane</Segment>
              <Segment>{this.printObject(data)}</Segment>
            </Segment.Group>
          )}
          {data && (
            <Segment.Group>
              <Segment tertiary>Wynik</Segment>
              <Segment>{result}</Segment>
            </Segment.Group>
          )}
        </Dropzone>
      </Container>
    );
  }
}
