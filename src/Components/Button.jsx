import React from 'react';
import "./App.css";
function Button(props) {
  return (
    <div className='button'>
    <button onClick={props.onClick}>
      {props.children}
    </button>
    </div>
  );
}
export default Button;
