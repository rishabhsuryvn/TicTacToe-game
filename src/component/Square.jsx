import React from 'react'

const Square = ({className ,value, onClick}) => {
  return (
    <div onClick ={onClick} className={`square ${className}`}>
      {value}
    </div>
  )
}

export default Square
