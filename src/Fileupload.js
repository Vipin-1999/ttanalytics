import React, { Component } from "react";

var JSONdata = "";

class Fileupload extends Component {
  onReaderLoad(event) {
    JSONdata = event.target.result;
    JSONdata = JSON.parse(event.target.result);
  }
  inputHandler = (event) => {
    var reader = new FileReader();
    reader.onload = this.onReaderLoad;
    reader.readAsText(event.target.files[0]);
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/heatmap",
      JSONdata: JSONdata,
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <form onSubmit={(event) => this.submitHandler(event)}>
            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input
                  type="file"
                  onChange={(event) => this.inputHandler(event)}
                />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
              <div className="input-field right">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                >
                  Upload
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Fileupload;
