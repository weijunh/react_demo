import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes.js'
import NotMatch from './pages/not_match/notmatch.jsx'
class App extends Component {

  render () {
    return (
      <Router>
        <Switch>
          {
            routes.map((item, index) => {
              return <Route {...item} key={index}></Route>
            })
          }
          {/* 不写path就默认匹配所有路径 */}
          <Route component={NotMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
