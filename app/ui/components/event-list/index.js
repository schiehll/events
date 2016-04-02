import styles from '+/assets/styles/components/event-list.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import EventCard from '+/ui/components/event-card'
import constants from '+/config/constants'
import {getLatLng} from '+/utils/maps'

class EventList extends DumbComponent {
  loadEvents() : void {
    const {dispatch, actions, events} = this.props
    const {EVENTS_SUCCESS} = constants
    
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

  onRender() : Object {
    this.loadEvents()
    const {auth, events} = this.props

    return(
      <div className={styles.list}>
        <For each="event" index="i" of={events.events || []}>
          <div key={i} className={styles.event}>
            <EventCard {...event} auth={auth} onTagClickHandler={this.fiterByTag.bind(this)}/>
          </div>
        </For>
      </div>
    )
  }
}

export default EventList