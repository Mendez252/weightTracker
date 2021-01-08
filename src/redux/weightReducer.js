const initialState = {
  weight:'',
  currentDate:'currentDate state'
}

export function weightReducer(state = initialState,action){
  switch (action.type){
    case 'POST_WEIGHT':
      return {weight:action.payload}
      break;

    default:
      return state
  }
}