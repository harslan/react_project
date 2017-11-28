import React, { PropTypes, Component } from 'react'
import Hotel from './hotel';

export default class Hotels extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          {this.props.hotels.map((hotel, i) =>
            <Hotel key={i} {...hotel} show={false}/>
          )}
        </div>
    )
  }
}

Hotels.propTypes = {
  hotels: PropTypes.array.isRequired
}
