import React, { useState } from 'react'
import palavras from '../../palavras.js'
import "./game.css"


function Game(props) {
  const {attempts, word, showUnderScore, inGame, gameControl, gameOver} = props
console.log(gameOver)
function showString(){
  if(!gameOver){
    return(
      <div className="string" data-test="word"  data-answer={word}>
        {showUnderScore}
      </div>
    )
  }
  else {
    if (attempts === 6){
      return (
        <div className="red string" data-test="word"  data-answer={word}>
          {showUnderScore}
        </div>
    )
    }
    else {
      return (
        <div className="green string" data-test="word"  data-answer={word}>
          {showUnderScore}
        </div>
      )
    }
  }
}
  function showImg(){
    if (!inGame){
      return (
          <div className='forca'>
            <img data-test="game-image" src={`./assets/forca${attempts}.png`} alt="" /> 
            <button data-test="choose-word" onClick = {() => gameControl()}>Escolher Palavra</button>
          </div>
      )}

    else{
        return (
          <div className='forca'>
            <img src={`./assets/forca${attempts}.png`} alt = "img" data-test="game-image" />
            <div className='inGame'>
              <button data-test="choose-word" onClick = {() => gameControl()}>Escolher Palavra</button>
              {showString()}
            </div>

          </div>
        )}
  }
  return (
      showImg()
  )
}

export default Game