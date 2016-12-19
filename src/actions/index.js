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