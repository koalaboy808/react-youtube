import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyCLTXOkd2F6lvFXurrYlSNqD8Wf3iDbVYo';


// create new component... makes some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			// why does null work and not an empty object, aka {}
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			// when key and value are same you can condense in es6 from this...
			// this.setState({ videos: videos})
			// to this...
			this.setState({ videos });
			this.setState({ selectedVideo: videos[0]});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange = {videoSearch}/>
				<VideoDetail video = {this.state.selectedVideo}/>
				<VideoList
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
					videos = {this.state.videos}
				/>
			</div>
		);
	}
}

//take html on put into DOM
ReactDOM.render(<App/>, document.getElementsByClassName("container")[0]);
