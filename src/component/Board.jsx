import React from 'react'
import Square from './Square'
import Strike from './Strike'

const Board = ({square, onSquareClick, strikeClass}) => {
  return (
    <div className='board'>
      <Square onClick={()=> onSquareClick(0)}
       value={square[0]} 
       className='right-border bottom-border'/>

      <Square onClick={()=> onSquareClick(1)} 
      value={square[1]} className='right-border bottom-border'/>

      <Square onClick={()=> onSquareClick(2)}
       value={square[2]} className='bottom-border'/>

      <Square onClick={()=> onSquareClick(3)}
       value={square[3]} className='right-border bottom-border'/>

      <Square onClick={()=> onSquareClick(4)}
       value={square[4]} className='right-border bottom-border'/>

      <Square onClick={()=> onSquareClick(5)}
       value={square[5]} className='bottom-border'/>

      <Square onClick={()=> onSquareClick(6)}
       value={square[6]} className='right-border'/>

      <Square onClick={()=> onSquareClick(7)}
       value={square[7]} className='right-border '/>

      <Square onClick={()=> onSquareClick(8)} value={square[8]}/>

      <Strike strikeClass={strikeClass}/>
    </div>
  )
}

export default Board
