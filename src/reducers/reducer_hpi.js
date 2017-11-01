import { FETCH_DATA } from '../actions';

export default function(state=[], action) {
  switch(action.type){
    case FETCH_DATA:
      // console.log(state)
      return [action.payload.data, ...state]
    default:
      return state
  }
}

