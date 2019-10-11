import React from 'react';
import SearchBar from '../components/player/SearchBar';
import VideoList from '../components/player/VideoList';
import Video from '../components/player/Video';
import UrlParsing from '../components/urlParsing/UrlParsing';
import youtube from '../services/youtube';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.getSearchResult('JavaScript');
    }

    getSearchResult = async term => {
        try{
            const response = await youtube.get('/search', {
                params: {
                    q: term,
                }
            });
            this.setState(function (prevState) {
                return {
                    videos: response.data.items,
                    selectedVideo: prevState.selectedVideo !== null ? prevState.selectedVideo : response.data.items[0]
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    };

    onVideoSelect = (e, video) => {
        e.preventDefault();
        this.setState({selectedVideo: video});
    };

    render() {
        const { selectedVideo, videos} = this.state;

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8">
                        <SearchBar onFormSubmit={this.getSearchResult}/>
                        <Video video={selectedVideo}/>
                        <UrlParsing/>
                    </div>
                    <div className="col-sm-4">
                        <VideoList
                            onVideoSelect={this.onVideoSelect}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
