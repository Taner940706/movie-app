import React, {useState} from 'react';
import './App.css';
import Movie from './models/movie';

import Movies from './components/Movies';
import AddNewMovie from './components/AddNewMovie';

function App() {

  const [movie, setMovie] = useState<Movie[]>([])

  const onAddHandler = (name: string, poster: string, comment: string, score: string) =>{
      const newMovie = new Movie(name, poster, score, comment)

      setMovie((prevMovie) => {
        return prevMovie.concat(newMovie);
      })
  }

  return (
    <div className="App">
      <AddNewMovie onAddMovie={onAddHandler}/>
      <Movies items={movie}/>
    </div>
  );
}

export default App;
