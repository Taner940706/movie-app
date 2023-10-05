import Movie from "../models/movie";

const MovieItem: React.FC<{movie: Movie}> = (props) =>{
    return (
        <>
        <div id={props.movie.id} className='card'>
                <h1 className='name'>{props.movie.name}</h1>
                <img className='poster' src={props.movie.src} />
                <p className='comment'>{props.movie.comment}</p>
                <p className='score'>{props.movie.score}</p>
                </div>
                </>
    );
}

export default MovieItem;