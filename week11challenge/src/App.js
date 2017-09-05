/* 
Create an app to assign a list of people to one of two teams.
You may either start with a hard-coded array of people or you can create a form to gather names from the user.
Start with listing the users. Have some way to add them into one of the two teams.
Once a person is assigned, they should be removed from the unassigned list and should be added to a team list. 
Once a person is on a team list, have a way to remove them from a team assignment (which will put them back on the unassigned list) or to switch them to the other team. 
Finally, have a way to reset things back to the original state of the game at the beginning.
*/
import React, { Component } from 'react';
import Player from './Player';
import './App.css';
import get from 'lodash/get';

const data = {
  // hardcode users in game
  "players": [
    {"name": "Jesse Larson" },
    {"name": "Mark Isaiah"},
    {"name": "Chris Blue"}, 
    {"name": "Vanessa Ferguson"}, 
  ],
  "team1": [],
  "team2": [],
}

class App extends Component {
  constructor(){
    super();
    this.handleTeam1Click = this.handleTeam1Click.bind(this);
    this.handleTeam2Click = this.handleTeam2Click.bind(this);
    this.state = data;
  }

  // START SUDO CODE FOR HANDLECLICK FUNCTION:
  // create function that handlesclick
  // create variables that store data from state in arrays
  // when add to team 1 btn is pushed, remove name from unassigned list and show in team 1 list
  // when add to team 2 btn is pushed, remove name from unassigned list and show in team 2 list


  handleTeam1Click(index) {
    //I need my arrays
    let playerArray = this.state.players.slice();
    let team1Array = this.state.team1.slice();
    // using chaining by calling shift after splice(returns an array)
    const removedPlayer = playerArray.splice(index, 1).shift();
    team1Array.push(removedPlayer);

    this.setState({
      team1: team1Array,
      players: playerArray,
    })

  }

  handleTeam2Click(index) {
    //I need my array
    let playerArray = this.state.players.slice();
    let team2Array = this.state.team2.slice();

    const removedPlayer = playerArray.splice(index, 1).shift();
    team2Array.push(removedPlayer);

    this.setState({
      team2: team2Array,
      players: playerArray,
    })
  }

  render() {
    console.log('inRender');
    const players = this.state.players.map(function(player, index){
      return (
        // every element needs a key(includes this div too)
        <div key={`player-wrapper-${index}`} className="player">
          <Player
            // key is hidden so you can't access inside actual component
            key={`player-${index}`}
            player={player}
            handleTeam1Click={this.handleTeam1Click}
            handleTeam2Click={this.handleTeam2Click}
            index={index}
          />
        </div>
      );
    },this);

    const team1 = this.state.team1.map(function (player, index){
      return (
        // every element needs a key(includes this div too)
        <div key={`player-wrapper-${index}`} className="player">
          <Player
            // key is hidden so you can't access inside actual component
            key={`player-${index}`}
            player={player}
            handleTeam1Click={this.handleTeam1Click}
            handleTeam2Click={this.handleTeam2Click}
            index={index}
          />
        </div>
      );
    },this);

    const team2 = this.state.team2.map(function (player, index){
       return (
        // every element needs a key(includes this div too)
        <div key={`player-wrapper-${index}`} className="player">
          <Player
            // key is hidden so you can't access inside actual component
            key={`player-${index}`}
            player={player}
            handleTeam1Click={this.handleTeam1Click}
            handleTeam2Click={this.handleTeam2Click}
            index={index}
          />
        </div>
      );
    },this);

    return (
      <div className="App">
        <div className="unassigned">
          <h1>Unassigned Contestants</h1>
           {players}
        </div>

        <div className="teams">
          <div >
            <h3>Team Adam</h3>
            {team1}
          </div>

          <div>
            <h3>Team Alicia</h3>
            {team2}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

 