import thunk from 'redux-thunk'
import {loadingMiddleware} from 'redux-loading'

const middleware : Function[] = [
  thunk,
  loadingMiddleware
]

export default middleware