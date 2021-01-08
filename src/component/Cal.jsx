import React,{useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Cal.css'
import ActualDate from './ActualDate';
import moment from 'moment'

var today = new Date()
//var formatToday = moment(today).format('LLLL')



function Cal(){
  const [value, setValue] = useState(today)

    function onHandleChange(nextValue){
      setValue(nextValue)
      console.log(value)
    }
    
    return ( 
      <div className='cal'>
        <ActualDate handleDay={value}/>
        <Calendar onChange={onHandleChange} value={value}/>
      </div>
    )
}
 
export default  Cal;