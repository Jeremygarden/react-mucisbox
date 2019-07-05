import React, { Component } from "react";

class RecommendItem extends Component {
  render() {
    const { name, key, icons } = this.props;
    return (
      <li className="list-item" key={key}>
        <div className="list-item--wrapper">{name}</div>
      </li>
    );
  }
}

export default RecommendItem;
