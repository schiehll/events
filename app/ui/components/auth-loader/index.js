import React from 'react'
import DumbComponent from '+/core/DumbComponent'

class AuthLoader extends DumbComponent {
  onRender() : Object {
    return(
      <div>
        Authenticating...
      </div>
    )
  }
}

export default AuthLoader