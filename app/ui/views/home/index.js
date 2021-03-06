import styles from '+/assets/styles/components/home.pcss'
import colors from '+/assets/styles/variables/colors.pcss'
import sizes from '+/assets/styles/variables/sizes.pcss'
import React from 'react'
import View from '+/core/View'
import {route, title, restricted} from '+/utils/decorators'
import Header from '+/ui/components/header'
import i18n from '+/core/i18n'
import EventList from '+/ui/components/event-list'
import EventMap from '+/ui/components/event-map'
import EventForm from '+/ui/components/event-form'
import {
  Tabs,
  Tab,
  FontIcon,
  FloatingActionButton,
  LeftNav
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

  handleTagFilter(tag : string) : void {
    const {dispatch, actions} = this.props
    dispatch(actions.changeSubtitle({
      key: 'FILTERED_BY',
      filter: tag
    }))
  }

  handleEdit(event : Object) : void {
    const {form} = this.state
    const {dispatch, actions} = this.props
    let tags = ''
    event.tags.forEach(tag => tags += `#${tag.name} `)

    let date = new Date(event.event.date)
    let time = new Date(event.event.date)
    time.setDate(new Date().getDate())
    dispatch(actions.changeForm({
      editing: true,
      open: true,
      fields: {
        ...event.event,
        tags,
        date,
        time
      }
    }))
  }

  clearFilter() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.getEvents())
    dispatch(actions.changeSubtitle({
      key: 'SHOWING_ALL',
      filter: null
    }))
  }

  showSubtitle() : Object {
    const {subtitle} = this.state
    if(subtitle.filter !== null){
      return(
        <span>
          {i18n.t(subtitle.key, {tag: subtitle.filter})} 
          <FontIcon 
            onClick={this.clearFilter.bind(this)} 
            color={colors.lightPrimary} 
            className={`material-icons ${styles.clear}`}
          >clear</FontIcon>
        </span>
      )
    }
    
    return <span>{i18n.t(subtitle.key)}</span>
  }

  toggleForm() : void {
    const {form} = this.state
    const {dispatch, actions} = this.props
    dispatch(actions.changeForm({
      editing: form.editing,
      open: !form.open,
      fields: {
        ...form.fields
      }
    }))
  }

  onRender() : Object {
    const {auth, tab, form} = this.state
    return(
      <div className={styles.main}>
        <Header 
          user={auth.user} 
          onLogout={this.logout.bind(this)}
        />
        <h2 className={styles.title}>{i18n.t(tab)}</h2>
        <h3 className={styles.subtitle}>{this.showSubtitle.bind(this)()}</h3>
        <div className={styles.fab} onClick={this.toggleForm.bind(this)}>
          <FloatingActionButton secondary={true}>
            <FontIcon
              color={colors.alternateText} 
              className={`material-icons`}
            >add</FontIcon>
          </FloatingActionButton>
        </div>
        <Tabs className={styles.tabs} tabItemContainerStyle={{width: sizes.tabsWidth}}>
          <Tab 
            label={i18n.t('TAB_LIST')} 
            onActive={this.handleTabs.bind(this, 'EVENT_LIST')}
          >
            <EventList 
              {...this.props} 
              {...this.state} 
              onTagFilterHandler={this.handleTagFilter.bind(this)} 
              onEditClickHandler={this.handleEdit.bind(this)} 
            />
          </Tab>
          <Tab 
            label={i18n.t('TAB_MAP')} 
            onActive={this.handleTabs.bind(this, 'EVENT_MAP')}
          >
            <EventMap {...this.props}/>
          </Tab>
        </Tabs>
        <LeftNav 
          width={parseInt(sizes.formWidth)}
          docked={false} 
          open={form.open}
        >
          <EventForm
            {...this.props}
          />
        </LeftNav>
      </div>
    )
  }
}

export default Home