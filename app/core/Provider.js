import React, {PropTypes} from 'react'

export default class Provider extends React.Component {
  render() : Object {
    const props = {
      store: this.props.store,
      dispatch: this.props.store.dispatch,
      routes: this.context.routes,
      actions: this.props.actions
    }

    return React.cloneElement(this.props.children, {...props})
  }
}

Provider.contextTypes = {
  routes: PropTypes.object
}