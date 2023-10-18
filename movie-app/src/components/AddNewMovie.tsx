import React, { useRef, useState } from 'react';

import classes from './AddNewMovie.module.css';

const AddNewMovie: React.FC<{onAddMovie: (name: string, poster: string, comment: string, score: string, date: string, genre: string, duration: number) => void}> = (props) => {

    const movieNameInputRef = useRef<HTMLInputElement>(null);
    const moviePosterInputRef = useRef<HTMLInputElement>(null);
    const movieScoreInputRef = useRef<HTMLInputElement>(null);
    const movieCommentInputRef = useRef<HTMLInputElement>(null);
    const movieDateInputRef = useRef<HTMLInputElement>(null);
    const movieGenreInputRef = useRef<HTMLInputElement>(null);
    const movieDurationInputRef = useRef<HTMLInputElement>(null);

    const [inputIsBlank, setInputIsBlank] = useState(false);
    const [inputValueNumber, setInputValueNumber] = useState(false);


    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();

        const movieName = movieNameInputRef.current!.value;
        const moviePoster = moviePosterInputRef.current!.value;
        const movieScore = movieScoreInputRef.current!.value;
        const movieComment = movieCommentInputRef.current!.value;
        const movieDate = movieDateInputRef.current!.value;
        const movieGenre = movieGenreInputRef.current!.value;
        const movieDuration = Number(movieDurationInputRef.current!.value);

        if (movieName.trim().length === 0 || moviePoster.trim().length === 0 || movieScore.trim().length === 0 || movieComment.trim().length === 0
        || movieDate.length === 0 || movieGenre.length === 0 || String(movieDuration).length === 0){
            setInputIsBlank(true);
            return;
        }

        if (Number(movieScore)<0 || Number(movieScore)>100){
            setInputValueNumber(true);
            return;
        }
        props.onAddMovie(movieName, moviePoster, movieComment, movieScore, movieDate, movieGenre, movieDuration);
        movieNameInputRef.current!.value = '';
        moviePosterInputRef.current!.value = '';
        movieScoreInputRef.current!.value = '';
        movieCommentInputRef.current!.value = '';
        movieDateInputRef.current!.value = '';
        movieGenreInputRef.current!.value = '';
        movieDurationInputRef.current!.value = '';
        setInputIsBlank(false);
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
            <label htmlFor="Date: ">Date: </label>
            <input type="date" ref={movieDateInputRef}/>
            <label htmlFor="Genre: ">Genre: </label>
            <input type="text" ref={movieGenreInputRef}/>
            <label htmlFor="Duration: ">Duration: </label>
            <input type="number" ref={movieDurationInputRef}/>
            <button type="submit">Add</button>
            {inputIsBlank && <p className='error'>Please fill all fields!</p>}
            {inputValueNumber && <p className='error'>Please fill fields with correct values!</p>}
            </div>
        </form>
    )

}

export default AddNewMovie;