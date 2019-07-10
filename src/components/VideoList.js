import React from 'react';
import VideoItem from './VideoItem';
import '../css/main.css';

const VideoList = ({ videos, videoSelect }) => {

    const singleVideo = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} videoSelect={videoSelect} />
    })

    if (videos.length > 0) {
        return (
            <div>
                <ul className="video-list">
                    {singleVideo}
                </ul>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default VideoList;