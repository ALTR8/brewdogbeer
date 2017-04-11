import React, { Component } from 'react'
import '../App.css';

class Beer extends Component {
  constructor(){
    super()

  }

  render(){
    return (
      <div onMouseEnter={this.props.switchBeer}>
        <div className="beer col-xs-12">
          <button type="button" className="btn">
            {this.props.beer.name}
          </button>
        </div>
        <div className="toggleDetails">
          <div className="details col-m-6">
            <span className="detailstyle">
            </span>
          </div>
        </div>
        </div>
    )
  }
}

export default Beer