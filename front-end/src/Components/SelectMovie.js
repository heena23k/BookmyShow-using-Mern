import React, { useContext } from 'react';
import { moviesList } from '../data';
import RadioComponent from './RadioComponent';
import '../Css/SelectMovie.css';
import BsContext from '../Context/BsContext';

const SelectMovie = () => {
  const { movie, changeMovie } = useContext(BsContext); // ✅ fixed destructuring

  const handleChangeMovie = (val) => {
    changeMovie(val);
    window.localStorage.setItem('movie', val);
  };

  return (
    <>
      <h1 className='SM_heading'> Select A Movie :-</h1>
      <div className='SM_main_container'>
        {moviesList.map((el, index) => (
          <RadioComponent
            text={el}
            key={index}
            data={movie}
            changeSelection={handleChangeMovie}
          />
        ))}
      </div>
    </>
  );
};

export default SelectMovie;
