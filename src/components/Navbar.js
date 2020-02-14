import React, { Component } from 'react';
import Search from './Search';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="Navbar">
        <div className="container">
          <div className="Logo">
            {location.pathname === '/search' ? (
              <Link className="Go-back" to="/">
                <i className="fas fa-chevron-left"></i>
                Home
              </Link>
            ) : (
              <h1>Splash</h1>
            )}
          </div>
          <Search className="Navbar-search" />
        </div>
      </div>
    );
  }
}

export default Navbar;
