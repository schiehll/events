import styles from '+/assets/styles/components/login.pcss'
import React from 'react'
import View from '+/core/View'
import {route, title} from '+/utils/decorators'
import LoginForm from '+/ui/components/login-form'
import i18n from '+/core/i18n'

@route({
  name: 'login',
  path: '/login'
})
@title('Login')
class Login extends View {
  setLang(lang : string) : void {
    const {dispatch, actions} = this.props
    dispatch(actions.setLang(lang))
  }

  onRender() : Object {
    return(
      <div className={styles.login}>
        <div className={styles.lang}>
          <span onClick={this.setLang.bind(this, 'en-US')} className={i18n.locale === 'en-US' ? styles.active : ''}>EN</span> 
          <span onClick={this.setLang.bind(this, 'pt-BR')} className={i18n.locale === 'pt-BR' ? styles.active : ''}>BR</span>
        </div>
        <LoginForm {...this.props} />
      </div>
    )
  }
}

export default Login