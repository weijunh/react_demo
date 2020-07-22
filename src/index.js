import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.render(

  /* 
    1.直接把store传入到组件中
      获取数据用this.props.store.getState().属性名
      获取数据更新操作this.props.store.dispatch(action.方法值)
      仅仅是数据状态改变,界面没有重新渲染,需要手动调用store对象.subscribe(()=>{内部修改渲染界面的代码})


    2.从 react-redux  引入Provider组件 传入store
    在组件内部使用高阶组件connect((state)=>({状态数据}),{分发的方法1,分发的方法2})(组件)
    store中的状态数据和分发的方法直接在组件的props中就存在了
  */
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
