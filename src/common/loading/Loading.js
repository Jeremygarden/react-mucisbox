import React, { Component } from "react";
import loadingImg from "./loading.gif";
import "../../assets/scss/components/_loading.scss";

class Loading extends Component {
  render() {
    let displayStyle =
      this.props.show === true ? { display: "" } : { display: "none" };
    return (
      <div className="app-loading" style={displayStyle}>
        <div className="app-loading--wrapper">
          <img src={loadingImg} width="20px" height="20px" alt="loading" />
          <h3 className="loading-title">{this.props.title}</h3>
        </div>
      </div>
    );
  }
}

export default Loading;
