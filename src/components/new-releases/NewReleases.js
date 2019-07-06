import React, { Component } from "react";
import NewReleasesItem from "./NewReleasesItem.js";
import axios from "../../utils/axios";
import "../../assets/scss/components/_lists.scss";

class NewReleases extends Component {
  state = {
    authToken:
      "BQCopupVcnQmZLtgo8nJLMmSAHHAvhlhBUAi_I9WXM7gX_95OoiLZrd_CgEr7FD6IAyCXfrwqKrHUAcM3Nc",
    authorized: false,
    newRelease: []
  };
  componentDidMount() {
    // const client_id = '9a7698918cf840008335042b9eb87ae3'; //'CLIENT_ID'
    // const client_secret = '9833e63a7d9e4e4ea62b0856fd192628'; // 'Client_Secret'
    // const scopes = 'user-read-private+user-read-email+playlist-read-private+user-top-read+user-read-recently-played';
    // const spotifyURL = 'https://accounts.spotify.com/authorize/?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes}';
    // const spotifyProfile = 'spotifyProfileURL = "https://api.spotify.com/v1/me?access_token="';
    // const redirectURI = 'http://localhost:3000';
    const token = this.state.authToken;
    console.log("TOKEN!!" + token);
    axios
      .get(`/browse/new-releases`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        const newReleases = response.data;
        this.setState({
          newRelease: [...newReleases.albums.items]
        });
        console.log(this.state.newRelease);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getNewReleasesListItems() {
    return this.state.newRelease.map((item, index) => {
      return (
        <NewReleasesItem
          key={item.id + index}
          name={item.name}
          artists={item.artists[0].name}
          image={item.images[0].url}
          date={item.release_date}
        />
      );
    });
  }

  render() {
    console.log("yeaaaaah!!!!");
    return (
      <div className="panel app-new-releases">
        <h1 className="panel-title">New Releases</h1>
        <ul className="list-wrapper">{this.getNewReleasesListItems()}</ul>
      </div>
    );
  }
}

export default NewReleases;
