/* 
Create an app to assign a list of people to one of two teams.
You may either start with a hard-coded array of people or you can create a form to gather names from the user.
Start with listing the users. Have some way to add them into one of the two teams.
Once a person is assigned, they should be removed from the unassigned list and should be added to a team list. 
Once a person is on a team list, have a way to remove them from a team assignment (which will put them back on the unassigned list) or to switch them to the other team. 
Finally, have a way to reset things back to the original state of the game at the beginning.
*/
import React, { Component } from 'react';
import Players from './Players';
import './App.css';
import get from 'lodash/get';

const data = {
  // hardcode users in game
  "players": [
    {"name": "Jesse Larson", "index": 1},
    {"name": "Mark Isaiah"},
    {"name": "Chris Blue"}, 
    {"name": "Vanessa Ferguson"}, 
  ],
  "team1": [''],
  "team2": [''],
  "currentPlayer": "", 
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


  handleTeam1Click(player, index) {
    //I need my arrays
    let playerArray = this.state.players.slice();
    let team1Array = this.state.team1.slice();
    team1Array.push(player);
    playerArray.shift(player);
 
    this.setState({
      team1: team1Array,
      players: playerArray,
    })

  }

  handleTeam2Click(player) {
    //I need my array
    let playerArray = this.state.players.slice();
    let team2Array = this.state.team2.slice();

    //Whenever i click add to team 2 btn, push player into team2 array
    team2Array.push(player);
    playerArray.shift(player);

    this.setState({
      team2: team2Array,
      players: playerArray,
    })
  }

  render() {
   
    const players = this.state.players.map(function(player, index){
      return (
        <div className="player">

          <Players
            key={index} 
            players={player}
            handleTeam1Click={this.handleTeam1Click}
            handleTeam2Click={this.handleTeam2Click}
            removeComment={this.removeComment}
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
            <p>{this.state.team1}</p>
          </div>

          <div>
            <h3>Team Alicia</h3>
            <p>{this.state.team2}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

 