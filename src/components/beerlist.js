import React from 'react'
import Beer from './beer'
import '../App.css';


export default class BeerList extends React.Component {
		constructor(props){
			super(props)


		}

		render() {
			const beers = this.props.beerList.map((beer) => {
				return <Beer beer={beer} />
			})
			return(
			<div className="container">
				<div className="row">
					<div className="col-sm-3 col-md-6">
					{beers}
					</div>
				</div>
			</div>
			)
		}
	}

		

