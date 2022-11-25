import React, {useState} from 'react'
import './letters.css'


const alfabeto = ["a", "b", "c", "d", "e", "f", 
                "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", 
                "u", "v", "w", "x", "y", "z"
                ]

function Letters(props) {
  const {word, inGame, attempts, setAttempts, showUnderScore, setShowUnderScore} = props
  const [isClicked, setIsClicked] = useState([])
  console.log(word)
function isInWord(letter){

  if(!isClicked.includes(letter)){
    if (word.includes(letter)){
    [...word].filter((element, index) => {
      if (element == letter){
        showUnderScore[index] = letter
      }
    })
    setShowUnderScore([...showUnderScore])
  }
  else{
    setAttempts(attempts + 1)
  }
    setIsClicked([...isClicked, letter])
}
}


  return (
    <div className='keyBoard'>
        {alfabeto.map((letter, index) => {
            return (
                <button 
                key = {index}
                onClick = {()=> {if(inGame) isInWord(letter)}}
                > {letter} </button>
            )
        })}

    </div>
  )
}

export default Letters