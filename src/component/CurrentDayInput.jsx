import React from 'react';
import './CurrentDayInput.css'


const CurrentDateInput = (props) => {

  return ( 
    <div className="dateComponent">
      <p>Current date is:</p>
      <input type='text' disabled value={props.handleDay}/>
      <p>or</p>
      <p>Choose your day:</p>
      <div className="disabledInput">
      </div>
    </div>
   );
}
 
export default CurrentDateInput;