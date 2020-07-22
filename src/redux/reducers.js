import { combineReducers } from 'redux'
import { UPDATE_SEARCH, SAVE_USER, REMOVE_USER, UPDATE_TITLE, GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DEL_CATEGORY, GET_ROLES, ADD_ROLE, UPDATE_ROLE, DELETE_ROLE, GET_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from './action-types'
import { getItem } from '../utils/storage'

// reducers 包含多个函数 需要传入两个参数 包含prevState默认值  action对象 根据action对象的type不同 操作不同数据更新 
function searchName (prevState = '', action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.data
    default:
      return prevState
  }
}
// 获取localStorage中的token,没有时为空
const token = getItem('token') || ''
function userToken (prevState = token, action) {
  switch (action.type) {
    case SAVE_USER:

      return action.data
    default:
      return prevState
  }
}

// 外部获取数据的值store.getState().函数名称
export default combineReducers({
  searchName,
  userToken
})