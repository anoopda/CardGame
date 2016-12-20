import React from 'react'
import SelectGenre from './selectGenre'


export default class App extends React.Component {

render(){
return(
<div>
  < SelectGenre change={this.props.change}/>
 </div>
);
}
}




