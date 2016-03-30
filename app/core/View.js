import React, {PropTypes} from 'react'
import OverrideError from '+/errors/OverrideError'
import Component from '+/core/Component'
import AuthLoader from '+/ui/components/auth-loader'

class View extends Component {
  _tryToLoginWithToken() : void {
    const {store, actions, routes} = this.props
    const token = localStorage.getItem(`${CONFIG.STORAGE_KEY}.jwt`)
    if(token) {
      store.dispatch(actions.loginWithToken())
    }
    else{
      store.dispatch(actions.goTo(routes.login))
    }
  }

  _checkAccess() : void {
    this.state = this.props.store.getState()

    if(this.constructor.restricted && !this.state.auth.isAuthenticated){
      this._tryToLoginWithToken()
    }
  }

  componentWillMount() : void {
    this._checkAccess()
  }

  componentDidUpdate() : void {
    this._checkAccess()
  }

  onRender() : void {
    throw new OverrideError('onRender', 'View')
  }

  render() : Object {
    this.state = this.props.store.getState()

    if(!this.constructor.restricted || this.state.auth.isAuthenticated) {
      return this.onRender()
    }

    return <AuthLoader />
  }
}

View.restricted = false

export default View