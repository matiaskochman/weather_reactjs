import { combineReducers } from 'redux';
import WheatherReducer from './reducer_wheather'

const rootReducer = combineReducers({
  weather:WheatherReducer
});

export default rootReducer;
