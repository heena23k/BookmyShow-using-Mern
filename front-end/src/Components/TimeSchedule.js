import React from 'react'
import { slots } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/TimeSchedule.css'
const TimeSchedule = () => {
  return (
    <>
    <div className='slot_container'>
        <h1 className='TS_heading'> Select A Time Slot :-</h1>
        <div className='TS_main_container'>{slots.map((el,index)=>{
            return(
                <RadioComponent text = {el} key={index}/>
            // <div className='form-check-label'>
            )
        })}</div>
    </div>
    </>
  )
}

export default TimeSchedule