import Api from '+/core/Api'

const query = (q : string, callbacks : string[]) : Function => {
  return dispatch => {
    const [SUCCESS, ERROR] = callbacks
    Api.query(q).then(response => {
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

export default query