import React, { Component } from 'react';
// this is a library with helper functions 
import get from 'lodash/get';

class Players extends Component {

	render() {
		// Gets the value at `path` of `object`. If the resolved value is
			let player = get(this.props, 'players.name', '');

  	// `undefined`, the `defaultValue` is returned in its place.
		// the first is the path,
		// second is the object you are trying to reach
		return(
			<section className="player player1">
	      <h2>{player}</h2>
	      <button onClick={() => {this.props.handleTeam1Click(player)}}>Add to Team 1</button>
	      <button onClick={() => {this.props.handleTeam2Click(player)}}>Add to Team 2</button>	    
	    </section>
		);
	}	
}



export default Players;
