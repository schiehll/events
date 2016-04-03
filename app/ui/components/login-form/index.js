import styles from '+/assets/styles/components/login.pcss'
import React from 'react'
import Component from '+/core/Component'
import i18n from '+/core/i18n'
import Logo from '+/ui/components/logo'
import {
  Paper, 
  TextField,
  RaisedButton,
  FontIcon
} from 'material-ui'

class LoginForm extends Component {
  login() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.login({
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }))

    dispatch(actions.progress())
  }

  onRender() : Object {
    return(
      <div className={styles.login}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Paper className={styles.form}>
          <div className={styles.title}>{i18n.t('LOGIN')}</div>
          <div className={styles.fields}>
            <TextField
              id="email"
              type="email"
              ref={i => this.userEmail = i}
              hintText={i18n.t('EMAIL')}
            /><br/>
            <TextField
              id="password"
              type="password"
              ref={i => this.userPassword = i}
              hintText={i18n.t('PASSWORD')}
            /><br/>
            <RaisedButton 
              secondary={true} 
              label={i18n.t('ENTER')} 
              onClick={this.login.bind(this)} 
              fullWidth={true}
              style={{marginTop: 10}}
              disabled={!this.state.loading.done}
            />
          </div>
        </Paper>
      </div>
    )
  }
}

export default LoginForm