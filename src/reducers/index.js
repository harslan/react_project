import { combineReducers } from 'redux'
import {
  HOTELS_REQUEST, HOTELS_SUCCESS, HOTELS_FAILED,
  REVIEWS_REQUEST, REVIEWS_SUCCESS, REVIEWS_FAILED
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

function reviews(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REVIEWS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case REVIEWS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    case REVIEWS_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        items: [],
        error: action.error
      })
    default:
      return state
  }
}

function reviewsByHotel(state= {}, action) {
  switch (action.type) {
    case REVIEWS_REQUEST:
    case REVIEWS_SUCCESS:
    case REVIEWS_FAILED:
      return Object.assign({}, state, {
        [action.hotelId]: reviews(state[action.hotelId], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  hotels,
  reviewsByHotel
})

export default rootReducer;
