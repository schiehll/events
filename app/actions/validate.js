import constants from '+/config/constants'

const {SNACKBAR, VALIDATION} = constants

const validate = (fields : Object, message : string = 'EMPTY_FIELDS') : Function => {
  return dispatch => {
    const action = {
      type: VALIDATION,
      payload: {
        fields: fields
      }
    }

    dispatch(action)

    if(fields.length > 0){
      dispatch({
        type: SNACKBAR,
        payload: {
          open: true,
          message: message
        }
      })
    }
  }
}

export default validate