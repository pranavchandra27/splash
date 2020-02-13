import React, { createContext, Component } from 'react';
import Axios from 'axios';

const apiUrl = 'https://api.unsplash.com';
const apiKey = '1ec894e114e534ccb5780f624e4ab05461e5c60b29496f45f92c4127efbe1ddb';

export const SearchContext = createContext();

export class SearchProvider extends Component {
	state = {
		images: [],
		page: 1,
		query: '',
		relatedSearch: []
	};

	handleChange = e => {
		this.setState({ query: e });
	};

	addImages = data => {
		this.setState({ images: this.state.images.concat(data) });
	};

	loadMore = () => {
		this.setState({ page: this.state.page + 1 });
		Axios.get(
			`${apiUrl}/search?client_id=${apiKey}&page=${this.state.page}&per_page=30&query=${this.state.query}`
		).then(res => {
			console.log(res.data);
			this.addImages(res.data.photos.results);
		});
	};

	render() {
		return (
			<SearchContext.Provider
				value={{
					query: this.state.query,
					images: this.state.images,
					addImages: this.addImages,
					loadNewImages: this.loadMore,
					handleChange: this.handleChange,
					handleClick: this.handleClick
				}}
			>
				{this.props.children}
			</SearchContext.Provider>
		);
	}
}
