import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyAdpHWUP_lMB2UxcWXNiDDD6TpKnqlK9HI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos:[], selectedVideo:null};
    this.videoSearch('darius lol s7');
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        }
      );
    });
  }
  render(){

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className='row'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

//Injetando o componente no DOM da página
ReactDOM.render(<App />, document.querySelector('.container'));
