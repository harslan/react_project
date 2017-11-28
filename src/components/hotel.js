import React, { PropTypes, Component } from 'react'
import '../styles/hotel.css'


export default class Hotel extends Component {
  constructor(props) {
    super(props);
  }

  render() {

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
            </div>
            <div className="row hotel-body">
              <p> {this.props.description} </p>
            </div>

            <div className="row">
              <div className="pull-left">
              </div>
              <div className="pull-right hotel-footer-right">
                <span className="hotel-price">{this.props.price} {'\u20AC'}</span>
                <span>{(new Date(this.props.date_start)).toLocaleDateString('de-DE')} - {(new Date(this.props.date_end)).toLocaleDateString('de-DE')} </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired
}
