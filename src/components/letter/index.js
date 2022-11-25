import React from 'react'
import './letters.css'


const alfabeto = ["a", "b", "c", "d", "e", "f", 
                "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", 
                "u", "v", "w", "x", "y", "z"
                ]
function Letters() {
  return (
    <div className='keyBoard'>
        {alfabeto.map((letter, index) => {
            return (
                <button 
                key = {index}
                onClick = {()=> console.log(letter)}
                > {letter} </button>
            )
        })}

    </div>
  )
}

export default Letters