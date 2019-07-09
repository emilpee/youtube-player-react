import React from 'react';
import '../css/main.css';

const VideoItem = ({ video, videoSelect }) => {
    return (
        <div onClick={() => videoSelect(video)} className="video-item">
            <div className="side-1">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.thumbnails.description} />
                <h3>{video.snippet.title}</h3>
            </div>
            <div className="side-2">
                <small>Published at: {new Date(video.snippet.publishedAt).toLocaleDateString()}</small>
            </div>
        </div>
    );
}

export default VideoItem;