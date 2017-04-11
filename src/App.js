import React, { Component } from 'react';
import BeerList from './components/beerlist'
import Beer from './components/beer'
import Title from './components/title'
import ShowDetails from './components/showdetails'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      beerList: [],
      beer: {}
    }
    this.switchBeer = this.switchBeer.bind(this)
  }

  switchBeer(currentBeer){
    this.setState({
      beer: currentBeer
    })
  }

  componentWillMount(){
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then(({data}) => {
        this.setState({ beerList: data })
      })
  }


  render() {
    return (
      <div>
        <Title />
        <div className="beer">
          <BeerList beerList={this.state.beerList} switchBeer={this.switchBeer}/>
          {Object.keys(this.state.beer).length === 0 ? null : <ShowDetails beer={this.state.beer}/>}
        </div>
      </div>
  )}
}

export default App
