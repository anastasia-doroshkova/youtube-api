import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <a href={`https://youtu.be/${video.id.videoId}`} className="mb10 text-secondary video-item"
           onClick={(e) => onVideoSelect(e, video)}>
            <img
                alt={video.snippet.title}
                src={video.snippet.thumbnails.medium.url}
            />
            <p className="font-weight-bold">{video.snippet.title}</p>
        </a>
    );
};

export default VideoItem;
