import React from 'react'
import $ from 'jquery'

export default class SelectGenre  extends React.Component{

render(){

return(

		<div>
    		<select onChange = { (e)=>{this.props.change(e)} }>
				  <option value="TechTrail">Tech Trail</option>
				  <option value="FantasyTrail">Fantasy Trail</option>
			</select>
  		</div>
);


}

}



