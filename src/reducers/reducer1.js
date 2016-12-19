
import reducers from '../reducers/index'


const genreReducer = ( state ="initial state" , action) => {
  switch (action.type) {
    case 'genreAction':
      return state = "changed state" 
    case 'dataLoad':
      return state = {"data":val}  
    default:
      return state
  }
}
export default genreReducer 