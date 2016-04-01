import query from '+/actions/query'
import constants from '+/config/constants'

const {EVENTS_SUCCESS, EVENTS_ERROR} = constants

const getEvents = (tag : ?string = null) : Function => {
  return dispatch => {
    if(!tag){
      dispatch(query(`
        events{
          event{
            id
            name
            date
            address
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
      `, [EVENTS_SUCCESS, EVENTS_ERROR]))
    }
    else{
      dispatch(query(`
        events(tag: "${tag}"){
          event{
            id
            name
            date
            address
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
      `, [EVENTS_SUCCESS, EVENTS_ERROR]))
    }
  }
}

export default getEvents