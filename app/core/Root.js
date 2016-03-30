import React, {PropTypes} from 'react'
import {Router as ReactRouter, browserHistory} from 'react-router'
import Router from '+/core/Router'

class Root extends React.Component {
  getChildContext() : Object {
    return {
      routes: Router.routes
    }
  }

  render() : Object {
    return <ReactRouter routes={Router.routeConfig} history={browserHistory} />
  }
}

Root.childContextTypes = {
  routes: PropTypes.object
}

export default Root