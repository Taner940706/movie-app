import React from 'react'
import Movie from '../models/movie';
import MovieItem from './MovieItem';

const Movies: React.FC<{items: Movie[]}> = (props) =>  {
  return (
    <div>
        {props.items.map((item) => (
            <MovieItem key={item.id} movie={item} />
        ))}
    </div>
  )
}

export default Movies;