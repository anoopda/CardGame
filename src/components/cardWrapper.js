import React from 'react'

export default class CardWrapper extends React.Component {
constructor(){
	super()
	this.generateLayout = this.generateLayout.bind(this)	
}


generateLayout(){
			
}

render(){

	const {store} = this.context
	const cardlist = store.getState().genreState
	
	store.subscribe(()=>{
		console.log(cardlist)	
	})

	return(
		<div className="cardWrapper">
			{this.generateLayout()}	
		</div>
	);	
}

}


CardWrapper.contextTypes = {
  store: React.PropTypes.object
};