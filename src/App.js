import React from "react";
import Axios from "axios";
import User from "./components/User";
import Styled from "styled-components";

class App extends React.Component {
  state = {
    userInfo: {},
    followersInfo: []
  };

  componentDidMount() {
    Axios
      .get("https://api.github.com/users/asherkobin")
      .then(res => {
        this.setState({
          userInfo: res.data
        });
        
        Axios
          .get("https://api.github.com/users/asherkobin/followers")
          .then(res => {
            res.data.forEach(follower => {
              Axios
                .get(follower.url)
                .then (res => {
                  this.setState({
                    followersInfo: [...this.state.followersInfo, res.data]
                  });
                });
            });
          });
      })
      .catch(e => {
        console.log("Axios Error", e);
      });
  }
  
  render() {
    return (
      <AppContainer>
        { !this.state.userInfo ? <div>Loading...</div> : <User userInfo={this.state.userInfo} followersInfo={this.state.followersInfo} /> }
      </AppContainer>
    );
  }
}

const AppContainer = Styled.div`
  margin: 0 auto;
  width: 800px;
  border: 1px solid black;
  font-family: sans-serif;
  font-size: 20px;
`;

export default App;