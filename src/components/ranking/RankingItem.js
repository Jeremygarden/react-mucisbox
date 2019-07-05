import React, { Component } from "react";

class RankingItem extends Component {
  render() {
    const { name, icon } = this.props;
    return (
      <li className="list-item">
        <div className="list-item--wrapper">
          <img src={icon} />
          <h3>{name}</h3>
        </div>
      </li>
    );
  }
}

export default RankingItem;
