import React from 'react';
import { seats } from '../data';
import '../Css/LastBookingDetails.css';

const LastBookingDetails = () => {
  return (
    <div className='last_booking_details_container'>
      <div className='last_booking_details_header'>Last Booking</div>
      <div className='seats_container'>
        <p className='seats_header'>Seats:</p>
        <ul className='seats'>
          {seats.map((seat, index) => (
            <li className='seat_value' key={index}>
              {seat}
            </li>
          ))}
        </ul>
      </div>
      <p className='slot' style={{ textAlign: 'left' }}>
        Slot: 00:00 AM<span></span>
      </p>
      <p className='movie'>
        Movie: <span>Golmal 3</span>
      </p>
    </div>
  );
};

export default LastBookingDetails;
