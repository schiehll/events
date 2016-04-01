import constants from '+/config/constants'

const {CHANGE_SUBTITLE} = constants

const changeSubtitle = (state : Object) : Function => {
  return dispatch => {
    const action = {
      type: CHANGE_SUBTITLE,
      payload: state
    }

    dispatch(action)
  }
}

export default changeSubtitle