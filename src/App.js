import React from 'react';
import WeightInput from './component/WeightInput'
import './App.css';
import {connect} from 'react-redux'
import {createWeight} from './redux/actions'
import State from './component/State'
import DatesContainer from './component/Dates'
import WeightList from './component/WeightList'

class App extends React.Component {

  postWeight = (weight) =>{
    this.props.dispatch(createWeight(weight))
  }

  render(){
    return (
      <div className="App">
        <div>
          <DatesContainer />
          <WeightInput postWeight={this.postWeight}/>
        </div>
        <div>
          <WeightList weights={this.props.weights}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    weights:state.weights,
    currentDate:state.currentDate
  }
}

export  default connect (mapStateToProps)( App)
