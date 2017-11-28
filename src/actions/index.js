import fetch from 'isomorphic-fetch'

export const HOTELS_REQUEST = 'HOTELS_REQUEST';
export const HOTELS_SUCCESS = 'HOTELS_SUCCESS';
export const HOTELS_FAILED = 'HOTELS_FAILED';

function requestHotels() {
  return {
    type: HOTELS_REQUEST
  }
}

function requestHotelsSuccess(items) {
  return {
    type: HOTELS_SUCCESS,
    items
  }
}

function requestHotelsFailed(error) {
  return {
    type: HOTELS_FAILED,
    error
  }
}

export function fetchHotels() {
  return (dispatch) => {
    dispatch(requestHotels());
    return fetch('http://fake-hotel-api.herokuapp.com/api/hotels?count=5')
      .then(response => response.json())
      .then(json => {
        if(json.error) {
          return dispatch(requestHotelsFailed(json.error))
        }
        else {
          return dispatch(requestHotelsSuccess(json))
        }
      })
      .catch(error => dispatch(requestHotelsFailed(error)))
  }
}

export const REVIEWS_REQUEST = 'REVIEWS_REQUEST';
export const REVIEWS_SUCCESS = 'REVIEWS_SUCCESS';
export const REVIEWS_FAILED = 'REVIEWS_FAILED';

function requestReviews(hotelId) {
  return {
    type: REVIEWS_REQUEST,
    hotelId
  }
}

function requestReviewsSuccess(hotelId, items) {
  return {
    type: REVIEWS_SUCCESS,
    hotelId,
    items
  }
}

function requestReviewsFailed(error) {
  return {
    type: REVIEWS_FAILED,
    error
  }
}

function fetchReviews(id) {
  return (dispatch) => {
    dispatch(requestReviews(id));
    return fetch('http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=' + id)
      .then(response => response.json())
      .then(json => {
        return dispatch(requestReviewsSuccess(id, json))
      })
      .catch(error => dispatch(requestReviewsFailed(id, error)))
  }
}

function shouldFetchReviews(state, hotelId) {
  const reviews = state.reviewsByHotel[hotelId]
  if (!reviews) {
    return true
  } else {
    return false
  }
}

export function fetchReviewsIfNeeded(hotelId) {
  return (dispatch, getState) => {
    if (shouldFetchReviews(getState(), hotelId)) {
      return dispatch(fetchReviews(hotelId))
    }
  }
}
