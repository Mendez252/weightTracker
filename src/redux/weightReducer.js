const initialState = {
  weight:[],
  currentDate:[]
}

export function weightReducer(state = initialState,action){
  switch (action.type){
    case 'POST_WEIGHT':
      return {weight:action.payload}

    default:
      return state
  }
}