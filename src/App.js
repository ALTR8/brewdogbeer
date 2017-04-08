import React, { Component } from 'react';
import BeerList from './components/beerlist'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      beerList: []
    }
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
      <div className="beer">
        <BeerList beerList={this.state.beerList} />
      </div>
  )}
}

export default App
