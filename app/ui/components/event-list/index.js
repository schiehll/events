import styles from '+/assets/styles/components/event-list.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import EventCard from '+/ui/components/event-card'
import constants from '+/config/constants'
import {getLatLng} from '+/utils/maps'
import {
  Dialog, 
  FlatButton,
  Card,
  CardHeader
} from 'material-ui'
import i18n from '+/core/i18n'

const {
  EVENTS_SUCCESS, 
  EVENT_REMOVED, 
  EVENTS_ERROR
} = constants

class EventList extends DumbComponent {
  loadEvents(props : Object) : void {
    const {dispatch, actions, events} = props
    
    if(!events.events){
      dispatch(actions.getEvents())
    }
    else{
      const eventsWithoutPosition = events.events.filter(e => {
        return !e.event.lat || !e.event.lng
      })

      if(eventsWithoutPosition.length > 0){
        const eventsPromises = eventsWithoutPosition.map(event => {
          return getLatLng(event)
        })

        const eventsWithPosition = events.events.filter(e => {
          return e.event.lat && e.event.lng
        })

        Promise.all(eventsPromises).then(response => {
          dispatch({
            type: EVENTS_SUCCESS,
            payload: {
              events: [...response, ...eventsWithPosition]
            }
          })
        })
      }
    }
  }

  fiterByTag(tag : string) : void {
    const {dispatch, actions, onTagFilterHandler} = this.props
    dispatch(actions.getEvents(tag))
    onTagFilterHandler(tag)
  }

  deleteEvent(id : string) : void {
    const {dispatch, actions} = this.props
    dispatch(actions.mutation(`
      removeEvent(id: ${id}){
        event{
          id
          name
          address
          date
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
    `, [EVENT_REMOVED, EVENTS_ERROR]))

    this.closeConfirmation()
  }

  closeConfirmation() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.confirmation({
      open: false
    }))
  }

  openConfirmation(args : Object) : void {
    const {dispatch, actions} = this.props
    dispatch(actions.confirmation({
      open: true,
      ...args
    }))
  }

  componentDidMount() : void {
    this.loadEvents(this.props)
  }

  componentWillReceiveProps(nextProps : Object) : void {
    if(!nextProps.events.errors){
      this.loadEvents(nextProps)
    }
  }

  onRender() : Object {
    const {auth, events, confirmation} = this.props

    const actions = [
      <FlatButton
        label={i18n.t('CANCEL')}
        secondary={true}
        onTouchTap={this.closeConfirmation.bind(this)}
      />,
      <FlatButton
        label={i18n.t('CONFIRM')}
        primary={true}
        onTouchTap={this.deleteEvent.bind(this, confirmation.id)}
      />,
    ]

    return(
      <div>
        <If condition={events.events}>
          <div className={styles.list}>
            <For each="event" index="i" of={events.events}>
              <div key={i} className={styles.event}>
                <EventCard 
                  {...event} 
                  auth={auth}
                  onTagClickHandler={this.fiterByTag.bind(this)}
                  onDeleteClickHandler={this.openConfirmation.bind(this)}
                />
              </div>
            </For>
            <Dialog
              title={i18n.t('CONFIRMATION_TITLE')}
              actions={actions}
              modal={false}
              open={confirmation.open}
            >
              {i18n.t('CONFIRMATION_TEXT')}
            </Dialog>
          </div>
        <Else />
          <Card className={styles.empty}>
            <CardHeader
              title={i18n.t('NO_EVENTS_TITLE')}
              subtitle={i18n.t('NO_EVENTS_SUBTITLE')}
            />
          </Card>
        </If>
      </div>
    )
  }
}

export default EventList