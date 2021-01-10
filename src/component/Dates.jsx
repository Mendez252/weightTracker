import React,{useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Dates.css'
import moment from 'moment'
import CurrentDayInput from './CurrentDayInput'

var today = new Date()

//var formatToday = moment(today).format('LLLL')



function DatesContainer(){
  const [value, setValue] = useState(today)

    const onHandleChange = (nextValue) =>{
      setValue(nextValue)
      console.log(moment(value).format('L'))
    }
    
    return ( 
      <div className='cal'>
        <CurrentDayInput handleDay={moment(value).format('L')}/>
        <Calendar onChange={onHandleChange} value={value}/>
      </div>
    )
}
 
export default  DatesContainer;