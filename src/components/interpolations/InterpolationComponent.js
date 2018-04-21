import React, { Component } from "react";
import { Icon, Row, Col, Input } from "antd";
import Dropzone from "react-dropzone";
export default class InterpolationComponent extends Component {
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
      <div>
        <h1>{name}</h1>
        {!dropzoneActive &&
          data.length === 0 && <span>Upuść plik by wczytać dane</span>}
        <Dropzone
          disableClick
          style={{ border: "none", height: "75vh", textAlign: "center" }}
          onDrop={this.onDrop.bind(this)}
          onDragEnter={this.onDragEnter.bind(this)}
          onDragLeave={this.onDragLeave.bind(this)}>
          {dropzoneActive && (
            <Icon type="cloud-download" style={{ fontSize: 100 }} />
          )}
          {data.length > 0 && <h1>Dane wejściowe:</h1>}
          <Row type="flex">
            {data.map((point, key) => {
              const spanNum = 24 / data.length;

              return (
                <Col
                  key={key}
                  span={spanNum.toString()}
                  style={{
                    backgroundColor: key % 2 === 0 ? "#efefef" : "grey"
                  }}>
                  {point.x}
                </Col>
              );
            })}
          </Row>
          <Row type="flex">
            {data.map((point, key) => {
              const spanNum = 24 / data.length;

              return (
                <Col
                  key={key}
                  span={spanNum.toString()}
                  style={{
                    backgroundColor: key % 2 === 0 ? "#efefef" : "grey"
                  }}>
                  {point.y}
                </Col>
              );
            })}
          </Row>
          {data.length > 0 && (
            <div style={{ marginTop: 10 }}>
              <Input
                addonBefore="Szukane X"
                style={{ width: 200 }}
                value={x}
                onChange={e => this.setState({ x: e.target.value })}
              />
              <h1>Wynik:</h1>
              <h3>X = {result}</h3>
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}
