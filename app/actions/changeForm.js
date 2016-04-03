import constants from '+/config/constants'

const {CHANGE_FORM} = constants

const changeForm = (state : Object) : Function => {
  return dispatch => {
    const action = {
      type: CHANGE_FORM,
      payload: state
    }

    dispatch(action)
  }
}

export default changeForm