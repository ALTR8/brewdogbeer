import React from 'react'
import Beer from './beer'


export default class BeerList extends React.Component {
		constructor(props){
			super(props)


		}

		render() {
			const beers = this.props.beerList.map((beer) => {
				return <Beer beer={beer} />
			})
			return(
			<div>
				{beers}
			</div>
		)
	}
	}

		

