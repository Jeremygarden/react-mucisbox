import React, { Component } from "react";

class RecommendItem extends Component {
  render() {
    const { name } = this.props;
    return <li className="list-item">{name}</li>;
  }
}

export default RecommendItem;
