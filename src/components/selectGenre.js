import React from 'react'
import $ from 'jquery'

const SelectGenre = () => (
  <div>
    <select onChange = {change}>
	  <option value="Tech Trail">Tech Trail</option>
	  <option value="Fantasy Trail">Fantasy Trail</option>
	</select>
  </div>
)

function change(e){
console.log("changed selector state")
}


export default SelectGenre