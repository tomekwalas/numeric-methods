import React, { Component } from "react";
import { Layout, Icon, Row, Col, Input } from "antd";
import Dropzone from "react-dropzone";

const { Header, Content } = Layout;
export default class InterpolationComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      dropzoneActive: false
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
    const { data, dropzoneActive } = this.state;
    const { integration, name } = this.props;
    const result =
      data.length === 0 ? undefined : this.calculate(integration, data);
    return (
      <div>
        <h1>{name}</h1>
        {!dropzoneActive && !data && <span>Upuść plik by wczytać dane</span>}
        <Dropzone
          disableClick
          style={{ border: "none", height: "75vh", textAlign: "center" }}
          onDrop={this.onDrop.bind(this)}
          onDragEnter={this.onDragEnter.bind(this)}
          onDragLeave={this.onDragLeave.bind(this)}>
          {dropzoneActive && (
            <Icon type="cloud-download" style={{ fontSize: 100 }} />
          )}
          {data && (
            <div>
              <h1>Dane wejściowe:</h1>
            </div>
          )}
          {data &&
            Object.getOwnPropertyNames(data).forEach(key => {
              <p>
                {key}: {data[key]}
              </p>;
            })}
        </Dropzone>
      </div>
    );
  }
}
