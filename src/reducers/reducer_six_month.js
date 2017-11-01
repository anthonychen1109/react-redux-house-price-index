import { FETCH_SIX_MO } from '../actions';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_SIX_MO:
      console.log(action.payload.data)
      return [action.payload.data, ...state]
    default:
      return state
  }
}