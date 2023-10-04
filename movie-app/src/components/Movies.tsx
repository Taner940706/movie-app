import React from 'react'
import Movie from '../models/movie';
import MovieItem from './MovieItem';

const Movies: React.FC<{items: Movie[]}> = (props) =>  {
  return (
    <div>
        {props.items.map((item) => (
            // <div className='card'>
            //     <img className='poster' src={item.src} />
            //     <h1 className='name'>{item.name}</h1>
            //     <p className='comment'>{item.comment}</p>
            //     </div>
            <MovieItem movie={item} />
        ))}
    </div>
  )
}

export default Movies;