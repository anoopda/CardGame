
import reducers from '../reducers/index'


const genreReducer = ( state ={} , action) => {	

  switch (action.type) {
    case 'genreAction':{
    	state.currentGenre=action.currentGenre;
      break;
}

    case 'loadData':{
    	state.data=action.data;
    	break;
     }  

     case 'currentData':{
      state.currentdata = action.currentdata;
      break;
     }

    default:
      break;
  }
  return state
}
export default genreReducer 