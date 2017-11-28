import React, { Component } from 'react'
import '../styles/header.css'

export default class Header extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <nav className="header navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" onClick={this.props.onLogoClicked}>
              Hotel Searcher
            </a>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <button className="btn btn-default" onClick={onClick}> Load Hotels </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
