import constants from '+/config/constants'

//const {CHANGE_TAB} = constants

const showEventInfo = (state : Object) : Function => {
  return (dispatch, getState) => {
    const {map} = getState()

    if(map.hasOwnProperty('id') && map.id === state.id){
      dispatch({
        type: 'HIDE_EVENT_INFO',
        payload: {}
      })
    }
    else{
      dispatch({
        type: 'SHOW_EVENT_INFO',
        payload: state
      })
    }
  }
}

export default showEventInfo