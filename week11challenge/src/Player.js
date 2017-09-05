import React, { Component } from 'react';
import PropTypes from 'prop-types';

// this is a library with helper functions 
import get from 'lodash/get';

class Player extends Component {

	render() {
		// Gets the value at `path` of `object`. If the resolved value is
		// `undefined`, the `defaultValue` is returned in its place.
		// the first is the path,
		// second is the object you are trying to reach
		const playerName = get(this.props, 'player.name', '');
		const index = this.props.index;
		return(
			<section className="player player1" >
	      <h2>{playerName}</h2>
	      <button onClick={() => {this.props.handleTeam1Click(index)}}>Add to Team 1</button>
	      <button onClick={() => {this.props.handleTeam2Click(index)}}>Add to Team 2</button>	    
	    </section>
		);
	}	
}

Player.propTypes = {
	player: PropTypes.shape({
		name: PropTypes.string,
	}),
	index: PropTypes.number,
	handleTeam1Click: PropTypes.func,
	handleTeam2Click: PropTypes.func,
};

export default Player;
