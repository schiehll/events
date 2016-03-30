import {createStore, combineReducers, applyMiddleware} from 'redux'
import {loadingReducer} from 'redux-loading'
import * as reducers from 'glob:../../app/reducers/*.js'
import middleware from '+/config/middleware'

const reduxStore = createStore(
  combineReducers({
    ...reducers,
    loading: loadingReducer
  }),
  applyMiddleware(...middleware)
)

export default reduxStore