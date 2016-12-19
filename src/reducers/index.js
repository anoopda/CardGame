import { combineReducers } from 'redux'
import genreReducer from './reducer1'

const reducers = combineReducers({
   genreState : genreReducer
})

export default reducers
