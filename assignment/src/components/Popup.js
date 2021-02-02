import React from "react";
 
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={() => props.dropdown(false)}>x</span>
        <h1>Hi from Popup</h1>
      </div>
    </div>
  );
};
 
export default Popup;