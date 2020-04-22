import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<section className="home">
			<div className="home-banner">
				<div className="home-banner-content">
					<h1 className="home-title">Strictly Local</h1>
					<p className="home-subtitle">Find events and opportunities where you live</p>
					<div className="home-button-row">
						<Link to="/cities" className="btn primary">Explore</Link>
						<Link to="/signup" className="btn secondary">Sign Up</Link>
					</div>
				</div>
			</div>
			<div className="container md">
				<h1 className="home-welcome">Welcome Home</h1>
				<p className="home-subtitle">Find events and opportunities where you live</p>
				<div className="home-discover">
					<h3 className="home-discover-title">What will you discover?</h3>
					<p>
						From events, volunteer opportunities, landmarks, 
						and more, find what is in your area
					</p>
					<button className="btn inverse">Browse</button>
				</div>
			</div>
		</section>
	);
}


export default Home;
