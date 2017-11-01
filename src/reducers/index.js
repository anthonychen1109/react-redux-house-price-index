import { combineReducers } from 'redux';

import HPIReducer from './reducer_hpi';
import SixMonthReducer from './reducer_six_month';
import OneYearReducer from './reducer_one_year';
import FiveYearReducer from './reducer_five_year';

const rootReducer = combineReducers({
  HPI: HPIReducer,
  SixMonth: SixMonthReducer,
  OneYear: OneYearReducer,
  FiveYear: FiveYearReducer
})

export default rootReducer;