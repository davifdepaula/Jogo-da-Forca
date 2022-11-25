import React, { useState } from 'react'
import palavras from '../../palavras.js'
import "./game.css"


function Game(props) {
  const {attempts, word, inGame, gameControl} = props

  
  function showImg(){
    if (!inGame){
      return (
          <div className='forca'>
            <img src={`./assets/forca${attempts}.png`} alt="" /> 
            <button onClick = {() => gameControl()}>Escolher Palavra</button>
          </div>
      )}

    else{
        return (
          <div className='forca'>
            <img src={`./assets/forca${attempts}.png`} alt = "img"/>
            <div className='inGame'>
              <button onClick = {() => gameControl()}>Escolher Palavra</button>
              <div className='string'>
                {"_\t".repeat(word.length)}
              </div>
            </div>

          </div>
        )}
  }
  return (
      showImg()
  )
}

export default Game