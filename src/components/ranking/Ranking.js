import React, { Component } from "react";
import axios from '../../utils/axios';
class Ranking extends Component {
  state = {
    authToken: "BQCx0KN_fcPPSWxkc6FHzNAE7lgklsF0Fptwpu9ioQ6JOsMFSKdSQT2WtBKlFbG_Be7xhXbL7eU6G-v8R4o",
    authorized: false,
    category: []
  }
  componentDidMount() {
    // const client_id = '9a7698918cf840008335042b9eb87ae3'; //'CLIENT_ID' 
    // const client_secret = '9833e63a7d9e4e4ea62b0856fd192628'; // 'Client_Secret'
    // const scopes = 'user-read-private+user-read-email+playlist-read-private+user-top-read+user-read-recently-played';
    // const spotifyURL = 'https://accounts.spotify.com/authorize/?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes}';
    // const spotifyProfile = 'spotifyProfileURL = "https://api.spotify.com/v1/me?access_token="';
    // const redirectURI = 'http://localhost:3000';
    const token = this.state.authToken;
    console.log("TOKEN!!" + token);
    axios.get(`/browse/categories`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(response => {
        const category = response.data;
        this.setState({ category : category.categories.items });
        console.log(this.state.category);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log("yeaaaaah!!!!");
    return (
      <div className="app-ranking">
        <h1>Ranking</h1>
        <ul>
          {
            this.state.category.map((item,index) => {
              return <li key={ index + item }> { item.name } </li>
            })
          }
        </ul>
      </div>
    );
  }
  
}

export default Ranking;
