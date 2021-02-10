import React from 'react';

const YOUTUBE_URL = 'https://youtube.com/embed/';

const Video = (props) => {
    const videoId = props.videoID;
    return (
        <div className="embed-responsive embed-responsive-16by9 video_box">
            <iframe className="embed-responsive-item" src={`${YOUTUBE_URL}${videoId}`}/>
        </div>
    )
}
export default Video;