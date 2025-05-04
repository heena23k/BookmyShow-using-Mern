import React from 'react'
import SelectMovie from '../Components/SelectMovie'
import LastBookingDetails from '../Components/LastBookingDetails';
import TimeSchedule from '../Components/TimeSchedule';
import SelectSeats from '../Components/SelectSeats';
import '../Css/Home.css'
const Home = () => {
  const handleBookNow = () => {
    alert("Booking Confirmed")
  }
  return (
    <div className='container'>
    <div className='wrapper'>


    <div className='select_movie_component'>

 
     <SelectMovie/>
     </div>
     <div className='last-booking-details-conatiner'>
      <LastBookingDetails/>
     </div>
    </div>
    <div className='time_seats_container'>
        <TimeSchedule/>
<SelectSeats/>
        
        <button className='BN-btn' onClick={()=>{
          handleBookNow()
        }}>Book Now</button>
    </div>
    </div>
  )
}

export default Home;