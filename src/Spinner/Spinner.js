import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    const style = {
      parent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem'
      },
      image: {
        width: '200px'
      }
    };
    return (
      <div style={style.parent}>
        <img
          style={style.image}
          src="https://acegif.com/wp-content/uploads/loading-23.gif"
          alt="loader"
        />
      </div>
    );
  }
}
