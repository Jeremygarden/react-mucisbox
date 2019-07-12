import React, { Component } from "react";

class NewReleasesItem extends Component {
  render() {
    const { name, artists, image, date } = this.props;
    return (
      <li className="list-item">
        <div className="list-item--wrapper">
          <img src={image} alt={name} />
          <h3 className="list-item--name">{name}</h3>
          <h3>{artists}</h3>
          <h3>{date}</h3>
        </div>
      </li>
    );
  }
}

export default NewReleasesItem;
