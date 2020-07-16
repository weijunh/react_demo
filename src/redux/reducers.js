import { combineReducers } from 'redux'
import { UPDATE_SEARCH } from './action-types'

function searchName (prevState = '', action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.data
    default:
      return prevState
  }
}

export default combineReducers({
  searchName
})