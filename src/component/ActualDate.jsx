import React from 'react';
import './ActualDate.css'


const ActualDate = (props) => {

  return ( 
    <div className="dateComponent">
      <p>Current date is:</p>
      or
      <p>Choose your day:</p>
      <div className="disabledInput">
      <input type='text' disabled value={props.handleDay}/>
      </div>
    </div>
   );
}
 
export default ActualDate;