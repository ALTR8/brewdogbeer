import React, { Component } from 'react'
import '../App.css';

class Beer extends Component {
  constructor(){
    super()

  }

  render(){
    return (
      <div>
        <div className="beer col-sm-6 col-centered">
          <button type="button" className="btn beerbtn" data-toggle="modal" data-target="#myModal" onMouseEnter={this.props.switchBeer} onMouseLeave={this.props.removeBeer}>
            {this.props.beer.name}
          </button>
        </div>
      </div>
    )
  }
}

export default Beer
