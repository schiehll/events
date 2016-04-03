import styles from '+/assets/styles/components/auth-loader.pcss'
import colors from '+/assets/styles/variables/colors.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import {CircularProgress} from 'material-ui'

class AuthLoader extends DumbComponent {
  onRender() : Object {
    return(
      <div className={styles.loader}>
        <CircularProgress color={colors.lightPrimary} />
      </div>
    )
  }
}

export default AuthLoader