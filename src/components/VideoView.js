import React from 'react';

const VideoView = ({ video }) => {

    if (!video) {
        return <div></div>
    }

    const src = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video-view">
            <section className="video">
                <iframe src={src} title={video.snippet.title} />
            </section>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoView;