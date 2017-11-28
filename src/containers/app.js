import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/app.css';

import { fetchHotels, fetchReviewsIfNeeded } from '../actions'

import Header from '../components/header';
import Hotels from '../components/hotels';

class App extends Component {

  render() {
    const { hotels, reviewsByHotel, onShowReviews } = this.props;

    return (
      <div className="app container">
        <Header onClick={() => this.props.onSearch()} />

        {this.renderErrorMessage()}

        {hotels.isFetching &&
          <h2>Loading...</h2>
        }

        {!hotels.error && !hotels.isFetching && hotels.items &&
          <Hotels hotels={hotels.items} reviewsByHotel={reviewsByHotel} onShowReviews={onShowReviews}/>
        }

      </div>
    );
  }

  renderErrorMessage() {
    const { error } = this.props.hotels
    if(!error) {
      return
    }

    return (

      <div className="well">
          <h2> An error has ocurred </h2>
          <p>{error}</p>
      </div>

    )
  }
}

function mapStateToProps(state) {
  const { hotels, reviewsByHotel } = state


  return {
    hotels,
    reviewsByHotel
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: () => {
      dispatch(fetchHotels())
    },
    onShowReviews: (id) => {
      dispatch(fetchReviewsIfNeeded(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
