import React, { Component } from "react";

class RecommendItem extends Component {
  render() {
    const { name } = this.props;
    return (
      <li className="list-item">
        <div className="list-item--wrapper">{name}</div>
      </li>
    );
  }
}

export default RecommendItem;
