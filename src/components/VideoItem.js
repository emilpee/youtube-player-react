import React from 'react';
import '../css/main.css';

const VideoItem = ({ video, videoSelect }) => {
    return (
        <div onClick={() => videoSelect(video)} className="video-item">
            <h3>{video.snippet.title}</h3>
            <img src={video.snippet.thumbnails.medium.url} />
        </div>
    );
}

export default VideoItem;