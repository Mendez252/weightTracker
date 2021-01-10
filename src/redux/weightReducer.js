const initialState = {
  weights:[],
  currentDate:[]
}

export function weightReducer(state = initialState,action){
  switch (action.type){
    case 'CREATE_WEIGHT':
      return {weights:state.weights.concat(action.payload)}

    default:
      return state
  }
}