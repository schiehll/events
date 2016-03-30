import React from 'react'
import Component from '+/core/Component'
import i18n from '+/core/i18n'
import {Snackbar as SnackbarMUI} from 'material-ui'

class Snackbar extends Component {
  handleSnackbarClose() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.snackbar({
      open: false,
      message: ''
    }))
  }

  onRender() : Object {
    return(
      <SnackbarMUI
        open={this.state.snackbar.open}
        message={
          this.state.snackbar.message 
            ? i18n.t(this.state.snackbar.message)
            : ''
        }
        onRequestClose={this.handleSnackbarClose.bind(this)}
        autoHideDuration={5000}
        style={{textTransform: 'uppercase'}}
      />
    )
  }
}

export default Snackbar