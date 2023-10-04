import Movie from "../models/movie";

const MovieItem: React.FC<{movie: Movie}> = (props) =>{
    return (
        <div className='card'>
                <img className='poster' src={props.movie.src} />
                <h1 className='name'>{props.movie.name}</h1>
                <p className='comment'>{props.movie.comment}</p>
                </div>
    );
}

export default MovieItem;