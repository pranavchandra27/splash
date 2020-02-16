import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="intro">
            <h2>Download unlimited photos for free</h2>
            <button className="get-started">
              <Link to="/photos">
                Explore <i className="fas fa-chevron-right"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
