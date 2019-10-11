import React from 'react';

class UrlParsing extends React.Component {
    state = {
        url: 'https://www.youtube.com/watch?v=6QjIHnb5Ivs',
        selectedVideoId: null
    };

    componentDidMount() {
        this.parseVideoID();
    }

    onInputChange = event => {
        this.setState({url: event.target.value});
    };

    parseVideoID = () => {
        let {url} = this.state;
        let id = '';
        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            id = url[2].split(/[^0-9a-z_\-]/i);
            id = id[0];
        } else {
            id = url;
        }

        this.setState({selectedVideoId: id});
    };

    render() {
        const { selectedVideoId, url } = this.state;
        const videoSrc = selectedVideoId ? `https://www.youtube.com/embed/${selectedVideoId}` : null;

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title">#URL parsing</h5>
                    <div className="embed-video mb-3">
                        <iframe className="embed-player" title="video player" src={videoSrc}/>
                    </div>
                    <div className="url-parsing">
                        <div className="input-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Paste YouTube link here"
                                   value={url}
                                   onChange={this.onInputChange}
                            />
                            <div className="input-group-append">
                                <button onClick={this.parseVideoID}
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        id="button-addon2">
                                    Play
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UrlParsing;
