import { FETCH_ONE_YR } from '../actions';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_ONE_YR:
      console.log(action.payload.data)
      return [action.payload.data, ...state]
    default:
      return state
  }
}