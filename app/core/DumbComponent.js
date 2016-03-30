import React from 'react'
import OverrideError from '+/errors/OverrideError'

class DumbComponent extends React.Component {
  onRender() : void {
    throw new OverrideError('onRender', 'DumbComponent')
  }

  render() : Object {
    return this.onRender()
  }
}

export default DumbComponent