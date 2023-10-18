import Movie from "../models/movie";
import classes from './MovieItem.module.css';

const MovieItem: React.FC<{movie: Movie, onRemoveMovie: () => void}> = (props) =>{
    return (
        <>
        <div id={props.movie.id} className={classes.card}>
            <div className={classes['card-header']}>
                <span className={classes.genre}>{props.movie.genre}</span>
                <h1 className={classes.name}>{props.movie.name}</h1>
                <span className={classes.score}><span className={classes['star-rating']} dangerouslySetInnerHTML={{ __html: '&starf;' }}></span>
{props.movie.score}/100</span>
                </div>
                <div className={classes['card-main']}>
                <img className={classes.poster} src={props.movie.src} />
                <p className={classes.comment}>{props.movie.comment}</p>
                <p className={classes.date}>Release Date: {props.movie.date}</p>
                <p className={classes.duration}>Duration: {props.movie.duration} min.</p>
                <button onClick={props.onRemoveMovie}>Delete</button>
                </div>
                </div>
                </>
    );
}

export default MovieItem;