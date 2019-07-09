import React from 'react';

const VideoView = ({ video }) => {

    if (!video) {
        return <div></div>
    }

    return (
        <div className="video-view">
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoView;