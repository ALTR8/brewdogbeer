import React, { Component } from 'react'

class Beer extends Component {
  constructor(){
    super()
    this.state = {
      showDetails: false,
      popUpDetails: false
    }
    this.toggleDetails = this.toggleDetails.bind(this)
    this.togglePopUp = this.togglePopUp.bind(this)
  }

  showDetails(){
    let markup
    if (this.state.showDetails){
      markup = <div> abv: {this.props.beer.abv} food pairings: {this.props.beer.food_pairing[0]}, {this.props.beer.food_pairing[1]}, {this.props.beer.food_pairing[2]} </div>
    } else {
      markup = null
    }
    return (
      markup
    )
  }

  popUpDetails(){
    let popUpText
    if (this.state.popUpDetails){
      popUpText = <div> description: {this.props.beer.description} first brewed: {this.props.beer.first_brewed} </div>
    } else {
      popUpText = null
    }
    return(
      popUpText
    )
  }

  toggleDetails(){
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  togglePopUp(){
    this.setState({
      popUpDetails: !this.state.popUpDetails
    })
  }

  render(){
    return (
      <div onClick={this.toggleDetails} onMouseEnter={this.togglePopUp} onMouseExit={this.togglePopUp}>
        <div>
          {this.props.beer.name}
        </div>
        <div className="click">
          {this.showDetails()}
        </div>
        <div className="popUp">
          {this.popUpDetails()}
        </div>
      </div>
    )
  }
}

export default Beer