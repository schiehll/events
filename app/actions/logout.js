import constants from '+/config/constants'
import Auth from '+/core/Auth'
import goTo from '+/actions/goTo'
import Router from '+/core/Router'

const {LOGOUT} = constants

const logout = () : Function => {
  return dispatch => {
    const action = {
      type: LOGOUT,
      payload: {
        user: {},
        isAuthenticated: false
      }
    }

    Auth.logout().then(() => {
      dispatch(action)
      dispatch(goTo(Router.routes.login))
    })
  }
}

export default logout