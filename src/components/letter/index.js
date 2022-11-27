import React from 'react'
import './letters.css'


const alfabeto = ["a", "b", "c", "d", "e", "f", 
                "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", 
                "u", "v", "w", "x", "y", "z"
                ]

function Letters(props) {
  const {word, inGame, gameOver, setGameOver, attempts, setAttempts, showUnderScore, setShowUnderScore, isClicked, setIsClicked} = props

function isInWord(letter){

  if(!isClicked.includes(letter)){
    if (word.includes(letter)){
    [...word].filter((element, index) => {
      if (element === letter){
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
  if(!showUnderScore.includes("_\t")) setGameOver(true)
}

function checkGameState(letter){
  if(!gameOver && inGame){
    if(attempts === 6) {
      setGameOver(true)
      setShowUnderScore(word)
    }
    else isInWord(letter)
  }
}

  return (
    <div className='keyBoard'>
        {alfabeto.map((letter, index) => {
            return (
                <button 
                disabled = {!inGame || gameOver} 
                key = {index}
                onClick = {()=> checkGameState(letter)}
                data-test="letter"
                > {letter} </button>
            )
        })}

    </div>
  )
}

export default Letters