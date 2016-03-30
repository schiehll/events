import constants from '+/config/constants'

const {PROGRESS} = constants

const progress = (state = {
  percent: 1,
  increment: true
}) : Function => {
  return dispatch => {
    const action = {
      type: PROGRESS,
      payload: state
    }

    dispatch(action)
  }
}

export default progress