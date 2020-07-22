import { createStore, applyMiddleware } from 'redux'
//applyMiddleware是一个高阶函数，它将中间件装饰到了createStore函数上。
//异步操作
import thunk from 'redux-thunk'
//调试工具
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'


let store;
if (process.env.NODE_ENV === 'development') {
  store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(reducers, applyMiddleware(thunk));
}
// store.dispatch(action.方法值)
export default store