import styles from '+/assets/styles/components/home.pcss'
import css from 'react-css-modules'
import React from 'react'
import View from '+/core/View'
import {route, title, restricted} from '+/utils/decorators'
import Header from '+/ui/components/header'
import i18n from '+/core/i18n'
import {
  Tabs,
  Tab
} from 'material-ui'

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

  handleTabs(tab : string) : void {
    const {dispatch, actions} = this.props
    dispatch(actions.changeTab(tab))
  }

  onRender() : Object {
    const {auth, tab} = this.state
    return(
      <div styleName="main">
        <Header 
          user={auth.user} 
          onLogout={this.logout.bind(this)}
        />
        <h1 styleName="title">{i18n.t(tab)}</h1>
        <Tabs styleName="tabs" tabItemContainerStyle={{width: 200}}>
          <Tab 
            label={i18n.t('TAB_LIST')} 
            onActive={this.handleTabs.bind(this, 'EVENT_LIST')}
          >
            <div>
              Listas
            </div>
          </Tab>
          <Tab 
            label={i18n.t('TAB_MAP')} 
            onActive={this.handleTabs.bind(this, 'EVENT_MAP')}
          >
            <div>
              Mapas
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Home