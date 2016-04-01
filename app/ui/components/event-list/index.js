import styles from '+/assets/styles/components/event-list.pcss'
import React from 'react'
import Component from '+/core/Component'
import EventCard from '+/ui/components/event-card'

class EventList extends Component {
  onRender() : Object {
    return(
      <div className={styles.list}>
        <For each="event" index="i" of={this.props.events}>
          <div key={i} className={styles.event}>
            <EventCard {...event} auth={this.state.auth}/>
          </div>
        </For>
      </div>
    )
  }
}

EventList.defaultProps = {
  events: [
    {
      event: {
        name: 'Some Event Name',
        address: 'Rua Luiz Pasteur, 45 - São Leopoldo - RS',
        date: '10/04/2016 - 23:30',
        image: 'http://lorempixel.com/300/300/nightlife/'
      },
      user: {
        id: 1,
        name: 'userX'
      },
      tags: [
        {
          name: 'rock n roll'
        },
        {
          name: 'heavy metal'
        },
        {
          name: 'rock'
        },
        {
          name: 'punk'
        },
        {
          name: 'hard rock'
        },
        {
          name: 'grunge'
        }
      ]
    },
    {
      event: {
        name: 'Some Event Name',
        address: 'Rua Luiz Pasteur, 45 - São Leopoldo - RS',
        date: '10/04/2016 - 23:30',
        image: 'http://lorempixel.com/600/600/nightlife/'
      },
      user: {
        id: 2,
        name: 'userX'
      },
      tags: [
        {
          name: 'rock n roll'
        },
        {
          name: 'heavy metal'
        }
      ]
    },
    {
      event: {
        name: 'Some Event Name',
        address: 'Rua Luiz Pasteur, 45 - São Leopoldo - RS',
        date: '10/04/2016 - 23:30',
        image: 'http://lorempixel.com/300/300/nightlife/'
      },
      user: {
        id: 3,
        name: 'userX'
      },
      tags: [
        {
          name: 'rock n roll'
        },
        {
          name: 'heavy metal'
        }
      ]
    },
    {
      event: {
        name: 'Some Event Name',
        address: 'Rua Luiz Pasteur, 45 - São Leopoldo - RS',
        date: '10/04/2016 - 23:30',
        image: 'http://lorempixel.com/600/600/nightlife/'
      },
      user: {
        id: 1,
        name: 'userX'
      },
      tags: [
        {
          name: 'rock n roll'
        },
        {
          name: 'heavy metal'
        }
      ]
    }
  ]
}

export default EventList