import Api from '+/core/Api'

const mutation = (m : string, callbacks : string[]) : Function => {
  return dispatch => {
    const [SUCCESS, ERROR] = callbacks
    Api.mutate(m).then(response => {
      if(!response.hasOwnProperty('errors')){
        dispatch({
          type: SUCCESS,
          payload: response
        })
      }
      else{
        dispatch({
          type: ERROR,
          payload: response
        })
      }
    })
  }
}

export default mutation