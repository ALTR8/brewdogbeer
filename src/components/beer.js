import React, { Component } from 'react'

class Beer extends Component {
  constructor(){
    super()
    this.state = {
      showDetails: false,
    }
    this.toggleDetails = this.toggleDetails.bind(this)
  }

  showDetails(){
    let markup
    if (this.state.showDetails){
      markup = <div className="beerInfo">
      <div className="description"> {this.props.beer.description} </div>
        <div className="smallDetails"> abv: {this.props.beer.abv} first brewed: {this.props.beer.first_brewed} </div>
        <div className="foodPairing">food pairing suggestions: {this.props.beer.food_pairing[0]}, {this.props.beer.food_pairing[1]}, {this.props.beer.food_pairing[2]} </div>
        </div>
    } else {
      markup = null
    }
    return (
      markup
    )
  }


  toggleDetails(){
    this.setState({
      showDetails: !this.state.showDetails
    })
  }



  render(){
    return (
      <div onClick={this.toggleDetails}>
        <div className="beer col-xs-12">
          <span className="textstyle">
            {this.props.beer.name}
          </span>
        </div>
        <div className="toggleDetails">
          <div className="details col-m-6">
            <span className="detailstyle">
              {this.showDetails()}
            </span>
          </div>
        </div>
        </div>
    )
  }
}

export default Beer