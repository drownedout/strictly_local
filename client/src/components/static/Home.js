import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		return (
			<section className="home">
				<div className="home-banner">
					<div className="home-banner-content">
						<h1 className="home-title">Strictly Local</h1>
						<p className="home-subtitle">Live like a local</p>
						<div className="home-button-row">
							<Link to="/cities" className="btn primary">Explore</Link>
							<Link to="/signup" className="btn secondary">Sign Up</Link>
						</div>
					</div>
				</div>
				<h1 className="home-welcome">Welcome Home</h1>
			</section>
		);
	}
}


export default Home;
