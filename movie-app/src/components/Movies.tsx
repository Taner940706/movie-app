import React from 'react'

const Movies: React.FC<{items: string[]}> = (props) =>  {
  return (
    <div>
        <img className='poster' src='https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg' />
        <h1 className='name'>Scary movie</h1>
        <p className="comment">A year after disposing of the body of a man they accidentally killed, a group of dumb teenagers are stalked by a bumbling serial killer.</p>
        {props.items.map((item) => (
            <div className='card'>
                <img className='poster' src={item.src} />
                <h1 className='name'>{item.name}</h1>
                <p className='comment'>{item.comment}</p>
                </div>
        ))}
    </div>
  )
}

export default Movies;