import { combineReducers } from 'redux';

import HPIReducer from './reducer_hpi';
import SixMonthReducer from './reducer_six_month';

const rootReducer = combineReducers({
  HPI: HPIReducer,
  SixMonth: SixMonthReducer
})

export default rootReducer;