import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
	render(){
		return (
			<section className="home">
				<div className="home-banner">
				</div>
				<h1 className="home-welcome">Welcome Home</h1>
			</section>
		)
	}
}


export default Home;