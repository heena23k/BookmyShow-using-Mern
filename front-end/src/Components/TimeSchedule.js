import React, { useContext } from 'react'
import { slots } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/TimeSchedule.css'
import BsContext from '../Context/BsContext'
const TimeSchedule = () => {
  const context = useContext(BsContext);
  const { time, changeTime } = context; // ✅ fixed destructuring
  const handleChangeItem = (val) => {
    changeTime(val);
    window.localStorage.setItem('time', val);
  };

  return (
    <>
    <div className='slot_container'>
        <h1 className='TS_heading'> Select A Time Slot :-</h1>
        <div className='TS_main_container'>{slots.map((el,index)=>{
            return(
                <RadioComponent text = {el} key={index} data={time} changeSelection={handleChangeItem}/>
            // <div className='form-check-label'>
            )
        })}</div>
    </div>
    </>
  )
}

export default TimeSchedule