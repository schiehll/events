import React from 'react'
import OverrideError from '+/errors/OverrideError'

class Component extends React.Component {
  componentDidMount() : void {
    this.unsubscribe = this.subscribe()
  }

  componentWillUnmount() : void {
    this.unsubscribe()
  }

  subscribe() : Function {
    return this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  onRender() : void {
    throw new OverrideError('onRender', 'Component')
  }

  render() : Object {
    this.state = this.props.store.getState()
    return this.onRender()
  }
}

export default Component