import styles from '+/assets/styles/components/home.pcss'
import React from 'react'
import View from '+/core/View'
import {route, title, restricted} from '+/utils/decorators'
import Header from '+/ui/components/header'
import i18n from '+/core/i18n'
import EventList from '+/ui/components/event-list'
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
    const {auth, tab, events} = this.state
    return(
      <div className={styles.main}>
        <Header 
          user={auth.user} 
          onLogout={this.logout.bind(this)}
        />
        <h2 className={styles.title}>{i18n.t(tab)}</h2>
        <h3 className={styles.subtitle}>{i18n.t('SHOWING_THE_NEXT')}</h3>
        <Tabs className={styles.tabs} tabItemContainerStyle={{width: 200}}>
          <Tab 
            label={i18n.t('TAB_LIST')} 
            onActive={this.handleTabs.bind(this, 'EVENT_LIST')}
          >
            <EventList {...this.props} events={events} auth={auth} />
          </Tab>
          <Tab 
            label={i18n.t('TAB_MAP')} 
            onActive={this.handleTabs.bind(this, 'EVENT_MAP')}
          >
            <div>
              Map
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Home