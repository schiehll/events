import styles from '+/assets/styles/login.pcss'
import css from 'react-css-modules'
import React from 'react'
import Component from '+/core/Component'
import i18n from '+/core/i18n'
import Snackbar from '+/ui/components/snackbar'
import {
  Paper, 
  TextField,
  RaisedButton,
  FontIcon
} from 'material-ui'

@css(styles)
class LoginForm extends Component {
  login() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.login({
      email: this.userEmail.value,
      password: this.userPassword.value
    }))
  }

  handleSnackbarClose() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.snackbar({
      open: false,
      message: null
    }))
  }

  onRender() : Object {
    return(
      <div styleName="login">
        <div className="logo" styleName="logo">
          <FontIcon className="material-icons pull-left" color={styles.primary}>local_bar</FontIcon> events
        </div>
        <Paper styleName="form">
          <div styleName="title">{i18n.t('LOGIN')}</div>
          <div styleName="fields">
            <TextField
              type="email"
              ref={i => this.userEmail = i}
              hintText={i18n.t('EMAIL')}
            /><br/>
            <TextField
              type="password"
              ref={i => this.userPassword = i}
              hintText={i18n.t('PASSWORD')}
            /><br/>
            <RaisedButton 
              primary={true} 
              label={i18n.t('ENTER')} 
              onClick={this.login.bind(this)} 
              fullWidth={true}
              style={{marginTop: 10}}
              disabled={!this.state.loading.done}
            />
          </div>
        </Paper>
        <Snackbar {...this.props} />
      </div>
    )
  }
}

export default LoginForm