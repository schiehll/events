import Auth from '+/core/Auth'
import constants from '+/config/constants'

const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} = constants

const loginWithToken = () : Function => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      meta: {
        loading: true
      }
    })

    Auth.loginWithToken().then(response => {
      if(!response.hasOwnProperty('errors')){
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: response.data.authWithToken.user,
            isAuthenticated: true
          },
          meta: {
            loading: false
          }
        })
      }
      else{
        dispatch({
          type: LOGIN_ERROR,
          payload: {
            user: {},
            isAuthenticated: false,
            error: response.errors[0].message
          },
          meta: {
            loading: false
          }
        })
      }

    }).catch(err => {
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          isAuthenticated: false,
          user: {},
          error: err
        },
        meta: {
          loading: false
        }
      })
    })
  }
}

export default loginWithToken