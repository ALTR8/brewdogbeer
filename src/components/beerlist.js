import React from 'react'
import Beer from './beer'
import '../App.css';


export default class BeerList extends React.Component {
		constructor(props){
			super(props)


		}

		render() {
			const beers = this.props.beerList.map((beer) => {
				return <Beer beer={beer} switchBeer={this.props.switchBeer.bind(null, beer)} removeBeer={this.props.removeBeer.bind(null, beer)}/>
			})
			return(
			<div className="container">
				<div className="row">
					<span className="allbeers">
						<div className="col-sm-3 col-md-6">
						{beers}
						</div>
					</span>
				</div>
			</div>
			)
		}
	}
