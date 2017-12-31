import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
	renderLinks = () => {
		return (
			<ul className="links">
				<li>{ <Link to='/'>Home</Link> }</li>
				<li>{ <Link to='/about'>About</Link> }</li>
			</ul>
		);
	}

	render = () => {
		return (
			<div>
				<h1>HEADER</h1>

				{ this.renderLinks() }
			</div>
		);
	}
}