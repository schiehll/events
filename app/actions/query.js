import Api from '+/core/Api'

const query = (q : string, callbacks : Array) : Function => {
  return dispatch => {
    const [SUCCESS, ERROR] = callbacks
    Api.query(q).then(response => {
      if(!response.hasOwnProperty('errors')){
        dispatch({
          type: SUCCESS,
          payload: response.data
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