import React from 'react';

const VideoDetails = (props) => {
    const title = props.title;
    const overview = props.overview;
    const releasedate = props.releasedate;
    return(
        <div className="description">
            <h1 className="desc_title" >{title}</h1>
            <p className="desc_content">{overview}</p>
            <div className="desc_date"> 
            Date de sortie : {releasedate}
            </div>
        </div>
    )
}

export default VideoDetails;