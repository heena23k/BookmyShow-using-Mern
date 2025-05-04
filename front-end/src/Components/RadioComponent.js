import React from "react";
import '../Css/RadioComponent.css';
const RadioComponent = ({ text,changeSelection,data }) => {
  const handleChecked = (val) => {
    changeSelection(val);
    window.localStorage.setItem("movie", val);
  };
  return (
    <div  name ={text} className={`form-check-label ${data===text ?"active":"inactive"}`} onClick={() =>{ handleChecked(text)}}>
      <span>{text}</span>
    </div>
  );
};

export default RadioComponent;
