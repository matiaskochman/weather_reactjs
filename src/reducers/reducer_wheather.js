import {FETCH_WEATHER} from '../actions/index';

export default function(state = [],action){
  switch (action.type) {
    case FETCH_WEATHER:
      //state.concat returns a new array
      //return state.contat([action.payload.data]);

      // state.push(action.payload.data) mutates the array ,
      // that's not good for redux.

      // ...state iterates through the state array

      console.log(state);
      console.log(action.payload.data);
      return [action.payload.data, ...state];
      break;
    default:

  }
  return state;
}
