import React, { Component } from 'react';
import { SearchContext } from '../context/SearchContext';
import { Link } from 'react-router-dom';
import './Search.css';

class Search extends Component {
	static contextType = SearchContext;

	handleSubmit = e => {
		e.preventDefault();
		const { images, loadNewImages } = this.context;
		images.splice(0, images.length);
		loadNewImages();
	};

	render() {
		const { query, handleChange } = this.context;
		return (
			<div>
				<form className='Search' onSubmit={this.handleSubmit}>
					<Link to='/search'>
						<input
							type='text'
							value={query}
							onChange={e => handleChange(e.target.value)}
							placeholder='Search'
						/>
					</Link>
					<button type='submit'>
						<i className='fas fa-search icon'></i>
					</button>
				</form>
			</div>
		);
	}
}

export default Search;
