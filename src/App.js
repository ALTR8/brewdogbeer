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
  };
    this.switchBeer = this.switchBeer.bind(this);
    this.removeBeer = this.removeBeer.bind(this);
};

  switchBeer(currentBeer){
    this.setState({
      beer: currentBeer
  });
  };

  removeBeer(currentBeer) {
      this.setState({
          beer: {}
      });
  };

  componentWillMount(){
    axios
      .get('https://api.punkapi.com/v2/beers?abv_gt=2&per_page=80')
      .then(({data}) => {
        this.setState({ beerList: data })
      })
  }


  render() {
    return (
      <div>
          <div className="background">
            // <Title />
              <div className="beer">
                <BeerList beerList={this.state.beerList} switchBeer={this.switchBeer} removeBeer={this.removeBeer}/>
              </div>
              {Object.keys(this.state.beer).length === 0 ? null : <ShowDetails beer={this.state.beer}/>}
          </div>
      </div>
  )}
}

export default App
