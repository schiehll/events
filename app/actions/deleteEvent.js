import Api from '+/core/Api'
import constants from '+/config/constants'

const {
  SNACKBAR, 
  EVENT_REMOVED, 
  EVENTS_ERROR,
  EVENTS_REQUEST
} = constants

const deleteEvent = (id : string) : Function => {
  return dispatch => {
    dispatch({
      type: EVENTS_REQUEST,
      meta: {
        loading: true
      }
    })

    Api.mutate(`
      removeEvent(id: ${id}){
        event{
          id
          name
          address
          date
          image
        }
        user{
          id
          name
        }
        tags{
          name
        }
      }
    `).then(response => {
      if(!response.hasOwnProperty('errors')){
        dispatch({
          type: EVENT_REMOVED,
          payload: response.data,
          meta: {
            loading: false
          }
        })

        dispatch({
          type: SNACKBAR,
          payload: {
            open: true,
            message: 'EVENT_DELETED_WITH_SUCCESS'
          }
        })
      }
      else{
        dispatch({
          type: EVENTS_ERROR,
          payload: response,
          meta: {
            loading: false
          }
        })

        dispatch({
          type: SNACKBAR,
          payload: {
            open: true,
            message: 'EVENT_COULD_NOT_BE_DELETED'
          }
        })
      }
    })
  }
}

export default deleteEvent