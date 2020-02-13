import React, { Component } from 'react';
import Search from './Search';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div className='Navbar'>
				<div className='container'>
					<div className='Logo'>
						<h1>
							<Link to='/'>Splash</Link>
						</h1>
					</div>
					<Search className='Navbar-search' />
				</div>
			</div>
		);
	}
}

export default Navbar;
