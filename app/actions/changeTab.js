import constants from '+/config/constants'

const {CHANGE_TAB} = constants

const changeTab = (state : string) : Function => {
  return dispatch => {
    const action = {
      type: CHANGE_TAB,
      payload: state
    }

    dispatch(action)
  }
}

export default changeTab