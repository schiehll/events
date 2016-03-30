import {browserHistory} from 'react-router'
import constants from '+/config/constants'

const {GO_TO_ROUTE} = constants

const goTo = (route : string) : Function => {
  return dispatch => {
    const action = {
      type: GO_TO_ROUTE,
      payload: route
    }

    browserHistory.push(route)
    dispatch(action)
  }
}

export default goTo