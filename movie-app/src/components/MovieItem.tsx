import Movie from "../models/movie";
import classes from './MovieItem.module.css';

const MovieItem: React.FC<{movie: Movie, onRemoveMovie: () => void}> = (props) =>{
    return (
        <>
        <div id={props.movie.id} className={classes.card}>
                <h1 className={classes.name}>{props.movie.name}</h1>
                <img className={classes.poster} src={props.movie.src} />
                <p className={classes.comment}>Comment: {props.movie.comment}</p>
                <p className={classes.score}>Score: {props.movie.score}</p>
                <p className={classes.date}>Date: {props.movie.date}</p>
                <p className={classes.genre}>Genre: {props.movie.genre}</p>
                <p className={classes.duration}>Duration: {props.movie.duration}</p>
                <button onClick={props.onRemoveMovie}>Delete</button>
                </div>
                </>
    );
}

export default MovieItem;