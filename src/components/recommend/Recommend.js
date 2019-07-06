import React, { Component } from "react";
import RecommendItem from "./RecommendItem.js";
//import Loading from "../../common/loading/Loading.js";
import "../../assets/scss/components/_lists.scss";

const recommend_music = [
  { name: "Jay Chou" },
  { name: "JJ Lin" },
  { name: "G.E.M." }
];

class Recommend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="panel app-recommend">
        <h1 className="panel-title">Made For You</h1>
        <ul className="list-wrapper">
          {recommend_music.map(item => <RecommendItem name={item.name} />)}
        </ul>
      </div>
    );
  }
}

export default Recommend;
