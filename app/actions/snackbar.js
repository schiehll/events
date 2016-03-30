import constants from '+/config/constants'

const {SNACKBAR} = constants

const snackbar = (state : Object) : Function => {
  return dispatch => {
    const action = {
      type: SNACKBAR,
      payload: state
    }

    dispatch(action)
  }
}

export default snackbar