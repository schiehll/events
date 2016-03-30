import React from 'react'
import View from '+/core/View'
import {route, title} from '+/utils/decorators'
import LoginForm from '+/ui/components/login-form'

@route({
  name: 'login',
  path: '/login'
})
@title('Login')
class Home extends View {
  onRender() : Object {
    return(
      <LoginForm {...this.props} />
    )
  }
}

export default Home