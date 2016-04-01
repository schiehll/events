import styles from '+/assets/styles/components/home.pcss'
import colors from '+/assets/styles/variables/colors.pcss'
import React from 'react'
import View from '+/core/View'
import {route, title, restricted} from '+/utils/decorators'
import Header from '+/ui/components/header'
import i18n from '+/core/i18n'
import EventList from '+/ui/components/event-list'
import EventMap from '+/ui/components/event-map'
import constants from '+/config/constants'
import {
  Tabs,
  Tab,
  FontIcon
} from 'material-ui'

@route({
  name: 'home',
  path: '/'
})
@title('Home')
@restricted
class Home extends View {
  constructor(props) {
    super(props)
    this.maps = null
  }

  logout() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.logout())
  }

  handleTabs(tab : string) : void {
    const {dispatch, actions} = this.props
    dispatch(actions.changeTab(tab))
  }

  handleTagFilter(tag : string) : void {
    const {dispatch, actions} = this.props
    dispatch({
      type: 'CHANGE_SUBTITLE',
      payload: {
        key: 'FILTERED_BY',
        filter: tag
      }
    })
  }

  clearFilter() : void {
    const {dispatch, actions} = this.props
    const {EVENTS_SUCCESS, EVENTS_ERROR} = constants
    dispatch(actions.query(`
      events{
        event{
          id
          name
          date
          address
          image
        }
        user{
          id
          name
        }
        tags{
          name
        }
      }
    `, [EVENTS_SUCCESS, EVENTS_ERROR]))

    dispatch({
      type: 'CHANGE_SUBTITLE',
      payload: {
        key: 'SHOWING_ALL',
        filter: null
      }
    })
  }

  onRender() : Object {
    const {auth, tab, events, subtitle} = this.state
    return(
      <div className={styles.main}>
        <Header 
          user={auth.user} 
          onLogout={this.logout.bind(this)}
        />
        <h2 className={styles.title}>{i18n.t(tab)}</h2>
        <h3 className={styles.subtitle}>{
          subtitle.filter !== null 
          ? <span>{i18n.t(subtitle.key, {tag: subtitle.filter})} <FontIcon onClick={this.clearFilter.bind(this)} color={colors.lightPrimary} className={`material-icons ${styles.clear}`}>clear</FontIcon></span> : i18n.t(subtitle.key)
        }</h3>
        <Tabs className={styles.tabs} tabItemContainerStyle={{width: 200}}>
          <Tab 
            label={i18n.t('TAB_LIST')} 
            onActive={this.handleTabs.bind(this, 'EVENT_LIST')}
          >
            <EventList {...this.props} events={events} auth={auth} onTagFilterHandler={this.handleTagFilter.bind(this)} />
          </Tab>
          <Tab 
            label={i18n.t('TAB_MAP')} 
            onActive={this.handleTabs.bind(this, 'EVENT_MAP')}
          >
            <EventMap {...this.props}/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Home