import styles from '+/assets/styles/components/event-info-window.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import {formatDateAndTime} from '+/utils/date'

class EventInfoWindow extends DumbComponent {
  onRender() : Object {
    const {name, address, date} = this.props
    return(
      <div>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.date}>{formatDateAndTime(new Date(date))}</h2>
        <div>{address}</div>
      </div>
    )
  }
}

export default EventInfoWindow