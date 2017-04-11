import React, { Component } from 'react'
import '../App.css';

class Beer extends Component {
  constructor(){
    super()

  }

  render(){
    return (
      <div onMouseEnter={this.props.switchBeer}>
        <div className="beer col-s-3">
          <button type="button" className="btn">
            {this.props.beer.name}
          </button>
        </div>
      </div>
    )
  }
}

export default Beer