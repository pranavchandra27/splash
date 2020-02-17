import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ImageContext } from '../context/ImageContext';
import './NewImage.css';
import Spinner from '../Spinner/Spinner';
import HomeSearch from './HomeSearch';

export default class Image extends Component {
  static contextType = ImageContext;
  render() {
    const { images, loadNewImages } = this.context;
    return (
      <React.Fragment>
        <HomeSearch />
        <InfiniteScroll
          dataLength={images.length}
          hasMore={true}
          next={loadNewImages}
          loader={<Spinner />}
        >
          <Masonry
            className={'Grid'}
            elementType={'div'}
            options={{ gutter: 14, fitWidth: true }}
          >
            {images.map(image => (
              <div key={image.id}>
                <div className="Image" style={{ background: image.color }}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={image.links.download}
                  >
                    <img
                      className="img"
                      src={image.urls.small}
                      alt={image.alt_description}
                      loader={<div style={{ background: image.color }}></div>}
                    />
                  </a>
                  <div className="bottom-info">
                    <div className="user-info">
                      <a href={image.user.links.html}>
                        <img
                          src={image.user.profile_image.small}
                          alt={image.user.name}
                        />
                      </a>
                      <p className="user-name">
                        <a href={image.user.links.html}>{image.user.name}</a>
                      </p>
                    </div>

                    <a className="download-btn" href={image.links.download}>
                      <i className="fas fa-download "></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </InfiniteScroll>
      </React.Fragment>
    );
  }
}
