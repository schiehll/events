import Auth from '+/core/Auth'
import constants from '+/config/constants'
import goTo from '+/actions/goTo'
import Router from '+/core/Router'

const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} = constants

const login = (user : Object) : Function => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      meta: {
        loading: true
      }
    })

    setTimeout(() => {


    Auth.login(user).then(response => {
      if(!response.hasOwnProperty('errors')){
        localStorage.setItem(`${CONFIG.STORAGE_KEY}.jwt`, response.data.auth.token)
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: response.data.auth.user,
            isAuthenticated: true
          },
          meta: {
            loading: false
          }
        })

        dispatch(goTo(Router.routes.home))
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

        dispatch({
          type: 'SNACKBAR',
          payload: {
            open: true,
            message: response.errors[0].message
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

      dispatch({
          type: 'SNACKBAR',
          payload: {
            open: true,
            message: err
          }
        })
    })
    }, 2000)
  }
}

export default login