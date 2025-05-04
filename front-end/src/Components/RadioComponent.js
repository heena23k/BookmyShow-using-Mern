import React from "react";
import '../Css/RadioComponent.css';
const RadioComponent = ({ text }) => {
  return (
    <div className="form-check-label">
      <span>{text}</span>
    </div>
  );
};

export default RadioComponent;
