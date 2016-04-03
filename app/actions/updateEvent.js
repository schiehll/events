import Api from '+/core/Api'
import constants from '+/config/constants'

const {
  SNACKBAR, 
  EVENT_SAVED, 
  EVENTS_ERROR,
  EVENTS_REQUEST
} = constants

const updateEvent = (data : Object) : Function => {
  return dispatch => {
    dispatch({
      type: EVENTS_REQUEST,
      meta: {
        loading: true
      }
    })

    const {id, name, address, image, tags, date} = data
    let tagstr = ', tags: ['
    tags.forEach((tag, index) => {
      if(index < tags.length - 1){
        tagstr += `"${tag}",`
      }
      else{
        tagstr += `"${tag}"]`
      }
    })
    const tagArg = tags.length > 0 ? tagstr : ''
    
    Api.mutate(`
      updateEvent(
        id: ${id},
        name: "${name}",
        address: "${address}",
        image: "${image}",
        date: "${date}"${tagArg}
      ){
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
          type: EVENT_SAVED,
          payload: response.data,
          meta: {
            loading: false
          }
        })

        dispatch({
          type: SNACKBAR,
          payload: {
            open: true,
            message: 'EVENT_UPDATED_WITH_SUCCESS'
          }
        })
      }
      else{
        console.log('response', response);
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
            message: 'EVENT_COULD_NOT_BE_SAVED'
          }
        })
      }
    })
  }
}

export default updateEvent