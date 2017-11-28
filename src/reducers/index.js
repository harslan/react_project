import { combineReducers } from 'redux'
import {
  HOTELS_REQUEST, HOTELS_SUCCESS, HOTELS_FAILED
} from '../actions'

function hotels(state = {
  isFetching: false,
  items: [],
  error: false
}, action) {
  switch (action.type) {
    case HOTELS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      })
    case HOTELS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    case HOTELS_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        items: [],
        error: action.error
      })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  hotels
})

export default rootReducer;
