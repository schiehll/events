import styles from '+/assets/styles/components/event-list.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import EventCard from '+/ui/components/event-card'
import constants from '+/config/constants'
import {getLatLng} from '+/utils/maps'

class EventList extends DumbComponent {
  loadEvents() : void {
    const {dispatch, actions, events, map} = this.props
    const {EVENTS_SUCCESS, EVENTS_ERROR} = constants
    if(!events.events){
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
    }
    else if(!events.events[0].event.hasOwnProperty('lat')){
      const eventsPromises = events.events.map(event => {
        return getLatLng(event)
      })

      Promise.all(eventsPromises).then(response => {
        dispatch({
          type: EVENTS_SUCCESS,
          payload: {
            events: response
          }
        })
      })
    }
  }

  onRender() : Object {
    this.loadEvents()
    const {auth, events} = this.props

    return(
      <div className={styles.list}>
        <For each="event" index="i" of={events.events || []}>
          <div key={i} className={styles.event}>
            <EventCard {...event} auth={auth}/>
          </div>
        </For>
      </div>
    )
  }
}

export default EventList