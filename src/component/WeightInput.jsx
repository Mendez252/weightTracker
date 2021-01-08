import React,{useState} from 'react'
import './WeightInput.css'


function WeightInput(props) {
  const[weight,setWeight] = useState('')

  function postWeight(weight){
    props.PostWeight(weight)
  }

  const onHandleChange = (e) =>{
    setWeight(e.target.value)
  }
  
    return ( 
      <div className='weightContainer'>

        <div className="title">Your weight today is:</div>
        <input className='inputWeight' type='text' placeholder='Enter your weight:' onChange={onHandleChange}/>
        <button onClick={postWeight}>Submit</button>

      </div>
     );
}
 
export default WeightInput;