import React, { useRef } from 'react';

import classes from './AddNewMovie.module.css';

const AddNewMovie: React.FC<{onAddMovie: (name: string, poster: string, comment: string, score: string) => void}> = (props) => {

    const movieNameInputRef = useRef<HTMLInputElement>(null);
    const moviePosterInputRef = useRef<HTMLInputElement>(null);
    const movieScoreInputRef = useRef<HTMLInputElement>(null);
    const movieCommentInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();

        const movieName = movieNameInputRef.current!.value;
        const moviePoster = moviePosterInputRef.current!.value;
        const movieScore = movieScoreInputRef.current!.value;
        const movieComment = movieCommentInputRef.current!.value;

        if (movieName.trim().length === 0 && moviePoster.trim().length === 0 && movieScore.trim().length === 0 && movieComment.trim().length === 0){
            return;
        }
        props.onAddMovie(movieName, moviePoster, movieComment, movieScore)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <h1>Add New Movie</h1>
            <div>
            <label htmlFor="Name: ">Name: </label>
            <input type="text" ref={movieNameInputRef}/>
            <label htmlFor="Poster: ">Poster: </label>
            <input type="text" ref={moviePosterInputRef}/>
            <label htmlFor="Comment: ">Comment: </label>
            <input type="text" ref={movieCommentInputRef}/>
            <label htmlFor="Score: ">Score: </label>
            <input type="number" ref={movieScoreInputRef}/>
            <button type="submit">Add</button>
            </div>
        </form>
    )

}

export default AddNewMovie;