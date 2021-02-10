import React from 'react';

const VideoListItem = (props) => {
const movie = props.movie;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
    return(
        <li className="list-group-left" onClick={handleClick}>
            <div className="media">
                <div className="media-left">
                    <img className="media-object img-rounded" width="120px" height="160px" src={`${IMAGE_URL}${movie.poster_path}`}/>
                </div>
                <div className="media-body">
                    <li className="title_liste_item">{movie.title}</li>
                </div>
            </div>
        </li>
    )

    function handleClick() {
        props.callBack(movie);
    }
}

export default VideoListItem;