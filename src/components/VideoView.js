import React from 'react';

const VideoView = ({ video }) => {

    if (!video) {
        return <div></div>
    }

    const src = `https://www.youtube.com/embed/${video.id.videoId}`;

    const videoStyles = {
        border: 'none',
        maxWidth: '675',
        height: '315'
    }


    return (
        <div className="video-view">
            <section className="video">
                <iframe src={src} title={video.snippet.title} style={videoStyles} />
            </section>
            <section className="desc">
                <h2>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
            </section>
        </div>
    )
}

export default VideoView;