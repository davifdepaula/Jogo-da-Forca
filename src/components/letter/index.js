import React from 'react'
import removeAccents   from 'remove-accents'
import { KeyBoard } from './styles'


const alfabeto = ["a", "b", "c", "d", "e", "f", 
                "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", 
                "u", "v", "w", "x", "y", "z"
                ]

function Letters(props) {
  const {word, inGame, gameOver, setGameOver, attempts, setAttempts, showUnderScore, setShowUnderScore, isClicked, setIsClicked} = props
  let count = attempts
function isInWord(letter){
  if(!isClicked.includes(letter)){
    if(removeAccents(word).includes(letter)){
    [...word].filter((element, index) => {
      if (removeAccents(element) === letter){
        showUnderScore[index] = element
      }
    })
    setShowUnderScore([...showUnderScore])
  }
  else{
    count++
    setAttempts(attempts + 1)
  }
    setIsClicked([...isClicked, letter])
}
  if(!showUnderScore.includes("_\t")) setGameOver(true)
}

function checkGameState(letter){
  if(!gameOver && inGame){
    if(attempts == 5) {
      setAttempts(6)
      setGameOver(true)
      setShowUnderScore(word)
    }
    else isInWord(letter)
  }
}

  return (
    <KeyBoard>
        {alfabeto.map((letter, index) => {
            return (
                <button 
                disabled = {(!inGame || gameOver) || isClicked.includes(letter)} 
                key = {index}
                onClick = {()=> checkGameState(letter)}
                data-test="letter"
                > {letter} </button>
            )
        })}

    </KeyBoard>
  )
}

export default Letters