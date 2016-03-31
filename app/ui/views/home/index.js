import styles from '+/assets/styles/components/home.pcss'
import css from 'react-css-modules'
import React from 'react'
import View from '+/core/View'
import {route, title, restricted} from '+/utils/decorators'
import Header from '+/ui/components/header'

@route({
  name: 'home',
  path: '/'
})
@title('Home')
@restricted
@css(styles)
class Home extends View {
  logout() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.logout())
  }

  onRender() : Object {
    return(
      <div styleName="main">
        <Header 
          user={this.state.auth.user} 
          onLogout={this.logout.bind(this)}
          title="EVENT_LIST"
        />
      </div>
    )
  }
}

export default Home