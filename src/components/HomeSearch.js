import React, { Component } from 'react';
import { SearchContext } from '../context/SearchContext';
import Axios from 'axios';
import './HomeSearch.css';
import { Redirect } from 'react-router-dom';

const apiUrl = 'https://api.unsplash.com';
const apiKey =
  '1ec894e114e534ccb5780f624e4ab05461e5c60b29496f45f92c4127efbe1ddb';

class HomeSearch extends Component {
  static contextType = SearchContext;
  state = {
    imgUrl:
      'https://images.unsplash.com/photo-1580184482544-62631b25c69a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb',
    bgColor: '#333',
    authorName: 'John Doe',
    authorPage: 'https://www.unsplash.com'
  };

  async componentWillMount() {
    await Axios.get(
      `${apiUrl}/photos/random?client_id=${apiKey}&query=mountains,seas&count=1&orientation=landscape`
    ).then(res => {
      this.setState({
        imgUrl: res.data[0].urls.full,
        bgColor: res.data[0].color,
        authorName: res.data[0].user.name,
        authorPage: res.data[0].user.links.html
      });
    });
  }

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
    const { redirect, handleChange, query } = this.context;
    const { imgUrl, bgColor, authorName, authorPage } = this.state;
    const style = {
      backgroundColor: `${bgColor}`,
      backgroundImage: `url('${imgUrl}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };
    if (!redirect) {
      return (
        <div className="HomeSearch" style={style}>
          <div className="heading">
            <h1>splash</h1>
            <p>Download free high-resolution photos</p>
          </div>
          <div className="HomeSearch-Form">
            <form onSubmit={this.handleSubmit}>
              <input
                required
                className="search"
                type="search"
                value={query}
                onChange={e => handleChange(e.target.value)}
                placeholder="Search for high-resolution photos"
              />
              <button className="submit-btn" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <div className="photo-info">
            <div className="photo-author">
              <p>
                Photo by <a href={authorPage}>{authorName}</a>
              </p>
            </div>
            <div className="photo-page">
              <p>
                Powered by <a href="https://www.unsplash.com">Unsplash</a>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/search" />;
    }
  }
}

export default HomeSearch;
