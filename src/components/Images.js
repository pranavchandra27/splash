import React, { Component } from 'react';
import { ImageContext } from '../context/ImageContext';
import Axios from 'axios';

const apiUrl = 'https://api.unsplash.com';
const apiKey = '1ec894e114e534ccb5780f624e4ab05461e5c60b29496f45f92c4127efbe1ddb';

class Images extends Component {
  static contextType = ImageContext;

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = () => {
    const { addImages } = this.context;
    Axios.get(`${apiUrl}/photos?client_id=${apiKey}&page=1&per_page=30`).then(res => {
      addImages(res.data);
    });
  };
  render() {
    return <div className='Images'></div>;
  }
}

export default Images;
