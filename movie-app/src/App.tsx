import React from 'react';
import './App.css';

import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Movies items={[{src: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg', name: 'Scary Movie', comment: 'A year after disposing of the body of a man they accidentally killed, a group of dumb teenagers are stalked by a bumbling serial killer.'}]}/>
    </div>
  );
}

export default App;
