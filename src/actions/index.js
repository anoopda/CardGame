import reducers from '../reducers/index'


const genreFilter = ( state ="initial state" , action) => {
  switch (action.type) {
    case 'genreAction':
      return state = "changed state"
    default:
      return state
  }
}
export default genreFilter




genreCheck(){

    const state=store.getState().genreState.data,
          currentGenre = store.getState().genreState.currentGenre;
          console.log(currentGenre)
          var key;

          for(key in state){
            
          if(key == currentGenre ){
                  console.log("key"+key)
                  store.dispatch({ type:"currentData", currentdata:store.getState().genreState.data.currentGenre }) 
            }
          } 
}
