import React, { PropTypes, Component } from 'react'
import '../styles/hotel.css'

import Reviews from './reviews'

export default class Hotel extends Component {
  constructor(props) {
    super(props);
    this.showReviews = this.showReviews.bind(this);
    this.state = {showingReviews: false}
  }

  showReviews() {

    if(!this.state.showingReviews) {
        this.props.onShowReviews(this.props.id);
    }

    this.setState({
      showingReviews: !this.state.showingReviews
    })


  }

  render() {

    let rating = [];
    for(let i = 0; i < this.props.stars; i++) {
        rating.push('\u2605');
    }
    for(let i = 0; i < 5 - this.props.stars; i++) {
        rating.push('\u2606');
    }

    let reviewsButtonText = this.state.showingReviews ? this.props.reviews.isFetching ? 'Loading reviews' : 'Hide reviews' : 'Show reviews';

    return (
      <div>
        <div className="hotel-row row well">
          <div className="hotel-row-img col-md-4">
            <div className="img-container">
              <img src={this.props.images[0]} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="hotel-header row">
              <div className="pull-left">
                <h3>{this.props.name}</h3>
                <span>{this.props.city} - {this.props.country}</span>
              </div>
              <div className="hotel-stars pull-right">
                  {rating.map((star,i) => <i key={i}>{star}</i>)}
              </div>
            </div>
            <div className="row hotel-body">
              <p> {this.props.description} </p>
            </div>

            <div className="row">
              <div className="pull-left">
                  <button className="btn btn-default" onClick={this.showReviews}>{reviewsButtonText}</button>
              </div>
              <div className="pull-right hotel-footer-right">
                <span className="hotel-price">{this.props.price} {'\u20AC'}</span>
                <span>{(new Date(this.props.date_start)).toLocaleDateString('de-DE')} - {(new Date(this.props.date_end)).toLocaleDateString('de-DE')} </span>
              </div>
            </div>

          </div>
        </div>
        <div>
          {this.state.showingReviews &&
            <Reviews reviews={this.props.reviews} />
          }
        </div>
      </div>
    )
  }
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired
}
