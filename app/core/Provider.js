//import 'react-progress-bar-plus/lib/progress-bar.css'
import styles from '+/assets/styles/app.pcss'
import React, {PropTypes} from 'react'
import Snackbar from '+/ui/components/snackbar'
import Progressbar from '+/ui/components/progressbar'

class Provider extends React.Component {
  render() : Object {
    const props = {
      store: this.props.store,
      dispatch: this.props.store.dispatch,
      routes: this.context.routes,
      actions: this.props.actions
    }

    return(
      <div className={styles.main}>
        {React.cloneElement(this.props.children, {...props})}
        <Snackbar {...props} />
        <Progressbar {...props} />
      </div>
    ) 
  }
}

Provider.contextTypes = {
  routes: PropTypes.object
}

export default Provider