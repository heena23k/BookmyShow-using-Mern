import React from 'react'
import SeatInputs from './SeatInputs'
import { seats } from '../data'

const SelectSeats = ({key,text}) => {
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'> Select Seats:</h1>
      <div className='SS_main_container'>
        {seats.map((el,index)=>{
          return(
            <SeatInputs key = {index} text = {el}/>
          )
        })}
      </div>
    </div>
  )
}

export default SelectSeats
