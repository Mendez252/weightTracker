import React from 'react';
import WeightInput from './component/WeightInput'
import './App.css';
import Dates from './component/Dates'
import {connect} from 'react-redux'
import {PostWeight} from './redux/actions'
import State from './component/State'

class App extends React.Component {

  postWeight = (weight) =>{
    this.props.dispatch(PostWeight(weight))
  }

  render(){
    return (
      <div className="App">
        <State weight={this.props.weight}/>
        <Dates />
        <WeightInput postWeight={this.postWeight}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    weight:state.weight,
    currentDate:state.currentDate
  }
}

export  default connect (mapStateToProps)( App)
