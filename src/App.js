import React from 'react';
import WeightInput from './component/WeightInput'
import './App.css';
import Cal from './component/Cal'
import {connect} from 'react-redux'
import {PostWeight} from './redux/actions'


class App extends React.Component {
  state = {currentDate:''}

  postWeight = (weight) =>{
    this.props.dispatch(PostWeight(weight))
  }

  render(){
    return (
      <div className="App">
        <Cal />
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
