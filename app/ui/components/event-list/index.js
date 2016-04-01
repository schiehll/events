import styles from '+/assets/styles/components/event-list.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import EventCard from '+/ui/components/event-card'
import constants from '+/config/constants'

class EventList extends DumbComponent {
  loadEvents() : void {
    const {dispatch, actions, events} = this.props
    if(!events.events){
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