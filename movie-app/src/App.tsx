import React, {useState} from 'react';
import './App.css';
import Movie from './models/movie';

import Movies from './components/Movies';
import AddNewMovie from './components/AddNewMovie';

function App() {

  const [movie, setMovie] = useState<Movie[]>([])

  const onAddHandler = (name: string, poster: string, comment: string, score: string, date: string, genre: string, duration: number) =>{
      const newMovie = new Movie(name, poster,comment, score, date, genre, duration);

      setMovie((prevMovie) => {
        return prevMovie.concat(newMovie);
      })
  }

  const onRemoveHandler = (movieId: string) => {
    setMovie((prevMovies) => {
      return prevMovies.filter(movie => movie.id !== movieId);
    })

  }

  return (
    <div className="App">
      <AddNewMovie onAddMovie={onAddHandler}/>
      <Movies onRemoveMovie={onRemoveHandler} items={movie}/>
    </div>
  );
}

export default App;
