import React, { Component } from 'react'
import '../styles/reviews.css'

export default class Reviews extends Component {

  render() {
    return (
        <div className="reviews">
          {this.props.reviews && this.props.reviews.items.map((review, i) =>

            <div key={i} className="row">
              {i!=0 && <hr /> }
              <div className="col-md-2">
                {review.positive &&
                  <span className="review-icon glyphicon glyphicon-plus"></span>
                }

                {!review.positive &&
                  <span className="review-icon glyphicon glyphicon-minus"></span>
                }

              </div>
              <div className="col-md-10">
                  <p className="review-name"><b>{review.name}</b></p>
                  <p>{review.comment}</p>
              </div>
            </div>
          )}
        </div>
    )
  }
}
