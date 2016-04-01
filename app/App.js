import styles from '+/assets/styles/header.pcss'
import React from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {loadingReducer} from 'redux-loading'
import * as reducers from 'glob:./reducers/*.js'
import * as actions from 'glob:./actions/*.js'
import middleware from '+/config/middleware'
import Provider from '+/core/Provider'
import Helmet from 'react-helmet'
import Theme from '+/Theme'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import theme from 'material-ui/lib/styles/theme-decorator'

const store = createStore(
  combineReducers({
    ...reducers,
    loading: loadingReducer
  }),
  applyMiddleware(...middleware)
)

@theme(ThemeManager.getMuiTheme(Theme))
class App extends React.Component {
  render() : Object {
    const {children, location} = this.props
    let className = styles.app
    if(location.pathname.includes('login')){
      className = styles.login
    }
    return(
      <div className={className}>
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