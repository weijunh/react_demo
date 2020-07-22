// 包含了多个函数,返回几乎都是同步的action对象,可以是异步action函数

// 引入action的type
import { UPDATE_SEARCH, SAVE_USER, REMOVE_USER, UPDATE_TITLE, GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DEL_CATEGORY, GET_ROLES, ADD_ROLE, UPDATE_ROLE, DELETE_ROLE, GET_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from './action-types.js'

export const updateSearch = (value) => ({ type: UPDATE_SEARCH, data: value })

export const saveUser = (value) => ({ type: SAVE_USER, data: value })