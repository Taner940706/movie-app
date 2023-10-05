import React from 'react';
import './App.css';
import Movie from './models/movie';

import Movies from './components/Movies';
import AddNewMovie from './components/AddNewMovie';

function App() {

  const movies = [
    new Movie('Scary Movie', 'A year after disposing of the body of a man they accidentally killed, a group of dumb teenagers are stalked by a bumbling serial killer.', 85,'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg')
  ];

  const onAddHandler = (name: string, poster: string, comment: string, score: string) =>{

  }

  return (
    <div className="App">
      <AddNewMovie onAddMovie={onAddHandler}/>
      <Movies items={movies}/>
    </div>
  );
}

export default App;
