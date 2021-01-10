import React,{useState} from 'react'
import './WeightInput.css'


function WeightInput(props) {
  const[weight,setWeight] = useState('')

  const postWeight = (weight) =>{
    props.postWeight(weight)
    setWeight('')
  }

  const onHandleChange = (e) =>{
    setWeight(e.target.value)
  }
  
    return ( 
      <div className='weightContainer'>

        <div className="title">Your weight today is:</div>
        <input className='inputWeight' type='text' placeholder='Enter your weight:' onChange={onHandleChange} value={weight}/>
        <button onClick={()=>postWeight(weight)}>Submit</button>

      </div>
     );
}
 
export default WeightInput;