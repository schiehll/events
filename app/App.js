import styles from '+/assets/styles/app.pcss'
import css from 'react-css-modules'
import React, {PropTypes} from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {loadingReducer} from 'redux-loading'
import * as reducers from 'glob:./reducers/*.js'
import * as actions from 'glob:./actions/*.js'
import middleware from '+/config/middleware'
import Provider from '+/core/Provider'
import Helmet from 'react-helmet'

const store = createStore(
  combineReducers({
    ...reducers,
    loading: loadingReducer
  }),
  applyMiddleware(...middleware)
)

@css(styles)
class App extends React.Component {
  render() : Object {
    const {children} = this.props
    return(
      <div styleName="main">
        <Helmet
        title={children.type.title || 'App'}
        titleTemplate={`${CONFIG.NAME} | %s`} />
        <Provider store={store} actions={actions}>
          {children}
        </Provider>
      </div>
    )
  }
}

export default App