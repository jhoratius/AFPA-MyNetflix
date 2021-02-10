import React from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) => {
const movies = props.listeFilms;
    return(
        <div>
            <ul>
                {movies.map(movie =>{
                    return <VideoListItem key={movie.id} movie={movie} callBack={receiveMovie}/>
                })}
            </ul>
        </div>
    )

    function receiveMovie(movie){
        // console.log('-----')
        // console.log('---je suis le parent---', movie)
        // console.log('-----')
        props.callBack(movie);
    }
}
export default VideoList;