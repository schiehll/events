import constants from '+/config/constants'

const {SHOW_EVENT_INFO} = constants

const openEventInfo = (event : Object) : Function => {
  return dispatch => {
    dispatch({
      type: SHOW_EVENT_INFO,
      payload: {event}
    })
  }
}

export default openEventInfo