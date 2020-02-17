import React, { Component } from 'react';
import { SearchContext } from '../context/SearchContext';
import { Redirect } from 'react-router-dom';
import './Search.css';

class Search extends Component {
  static contextType = SearchContext;

  handleSubmit = e => {
    e.preventDefault();
    const { changeRedirectState, images, loadNewImages } = this.context;
    images.splice(0, images.length);
    loadNewImages();
    changeRedirectState(true);
    // Setting State back to false after 2 seconds
    setTimeout(() => {
      changeRedirectState(false);
    }, 2000);
  };

  render() {
    const { redirect, query, handleChange } = this.context;

    if (!redirect) {
      return (
        <div>
          <form className="Search" onSubmit={this.handleSubmit}>
            <input
              required
              className="Search-input"
              type="text"
              value={query}
              onChange={e => {
                handleChange(e.target.value);
              }}
              placeholder="Search"
            />
            <button className="Search-btn" type="submit">
              <i className="fas fa-search icon"></i>
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="search" />
          <form className="Search" onSubmit={this.handleSubmit}>
            <input
              required
              className="Search-input"
              type="text"
              value={query}
              onChange={e => handleChange(e.target.value)}
              placeholder="Search"
            />
            <button className="Search-btn" type="submit">
              <i className="fas fa-search icon"></i>
            </button>
          </form>
        </div>
      );
    }
  }
}

export default Search;
