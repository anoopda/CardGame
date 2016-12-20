import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import $ from 'jquery'
import { Provider } from 'react-redux'
import App from './components/app'
import reducers from './reducers/index'
import CardWrapper from './components/cardWrapper'

const store = createStore(reducers)
const rootEl= document.getElementById('root')
export default class Main extends React.Component {

constructor(props){
	super(props)
	this.change = this.change.bind(this)
  this.genreCheck = this.genreCheck.bind(this)
}

componentDidMount(){
	$.ajax({
    url: "http://localhost:2000/src/json/data.json",
    dataType: "json",
    success : function(val){
    store.dispatch({type:"loadData", data:val}) 
    }.bind(this)
});
}

change(e){ 
store.dispatch({type:"genreAction",currentGenre:e.target.value})
this.genreCheck();
}

genreCheck(){
    const state=store.getState().genreState.data,
          currentvalue = store.getState().genreState.currentGenre;
          store.dispatch({ type:"currentData", currentdata:store.getState().genreState.data[currentvalue] })       
}


render(){
  store.subscribe(()=>{

  })
     
	return(
    	<Provider store = {store}>
      	  <div> 
         		<App change = {this.change} />
        	   < CardWrapper / >
          </div>   
      </ Provider>
  );	 
}




}

render(<Main/>, rootEl);
 



