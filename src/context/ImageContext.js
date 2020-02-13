import React, { createContext, Component } from 'react';
import Axios from 'axios';

const apiUrl = 'https://api.unsplash.com';
const apiKey = '1ec894e114e534ccb5780f624e4ab05461e5c60b29496f45f92c4127efbe1ddb';

export const ImageContext = createContext();

export class ImageProvider extends Component {
  state = {
    images: [],
    page: 1
  };

  addImages = data => {
    this.setState({ images: this.state.images.concat(data) });
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
    Axios.get(`${apiUrl}/photos?client_id=${apiKey}&page=${this.state.page}&per_page=30`).then(
      res => {
        this.addImages(res.data);
      }
    );
  };

  render() {
    return (
      <ImageContext.Provider
        value={{
          images: this.state.images,
          addImages: this.addImages,
          loadNewImages: this.loadMore
        }}
      >
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}
