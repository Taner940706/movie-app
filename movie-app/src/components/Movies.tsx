import React from 'react'
import Movie from '../models/movie';
import MovieItem from './MovieItem';

import classes from './Movies.module.css';

const Movies: React.FC<{items: Movie[], onRemoveMovie: (id: string) => void}> = (props) =>  {
  return <>
    <div className={classes.main}>
        {props.items.map((item) => (
            <MovieItem onRemoveMovie={props.onRemoveMovie.bind(null, item.id)} key={item.id} movie={item} />
        ))}
    </div>
    <div className={classes.error}>
  {props.items.length===0 && <p className={classes['error-text']}>Empty list!</p>}
  </div>
  </>
}

export default Movies;