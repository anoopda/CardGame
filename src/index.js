import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import $ from 'jquery'
import { Provider } from 'react-redux'
import App from './components/app'
import reducers from './reducers/index'


const store = createStore(reducers)
const rootEl= document.getElementById('root')

export default class Main extends React.Component {

constructor(props){
	super(props)
	this.change = this.change.bind(this)
	this.clickDetect =this.clickDetect.bind(this)
}

componentWillMount(){
	$.ajax({
    url: "http://localhost:8000/src/json/data.json",
    dataType: "json",
    success : function(val){
    console.log(val);
    store.dispatch({type:"dataLoad"})
    }.bind(this)
});
}

change(){
console.log("blahhh");
}

clickDetect(){
store.dispatch({type:"genreAction"})
console.log(state);
}

render(){
  const state = store.getState()  
	return(
    	<Provider store={store}>
      		<div>
         		< App change = {this.props.change} />
         		<button onClick={this.clickDetect}></button>
        	</div> 
      </ Provider>
        );	 
}

}

render(<Main/>, rootEl);
 



