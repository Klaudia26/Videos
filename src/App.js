import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import youTube from './api/youTube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.onFormSubmit('buildings');
  }
  onFormSubmit = async (value) => {
    const response = await youTube.get('/search', {
      params: {
        q: value,
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  handleClick = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    console.log('odp', this.state.videos);
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                handleClick={this.handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
