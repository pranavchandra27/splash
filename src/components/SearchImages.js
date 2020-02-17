import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SearchContext } from '../context/SearchContext';
import './SearchImages.css';
import Spinner from '../Spinner/Spinner';

export default class Image extends Component {
  static contextType = SearchContext;

  render() {
    const { images, loadNewImages } = this.context;
    if (!images.length) {
      return <Spinner />;
    }
    return (
      <React.Fragment>
        <InfiniteScroll
          dataLength={images.length}
          hasMore={true}
          next={loadNewImages}
          loader={<Spinner />}
        >
          <Masonry
            className={'Grid'}
            elementType={'div'}
            options={{
              gutter: 20,
              fitWidth: true
            }}
          >
            {images.map(image => (
              <div key={image.id}>
                <div
                  className="SearchImage"
                  style={{ background: image.color }}
                >
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={image.links.download}
                  >
                    <img
                      className="img"
                      src={image.urls.small}
                      alt={image.alt_description}
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
