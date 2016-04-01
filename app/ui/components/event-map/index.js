import styles from '+/assets/styles/components/event-map.pcss'
import React from 'react'
import Component from '+/core/Component'
import {
  Card,
  CardHeader,
  CardMedia
} from 'material-ui'
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from 'react-google-maps'
import _ from 'lodash'

class EventMap extends Component {
  handleEventClick(event) : void {
    const {dispatch, actions} = this.props
    dispatch(actions.toggleEventInfo(event))
  }

  onRender() : Object {
    let markers = []
    const {events} = this.state
    let center = {lat: -30.0418885, lng: -51.2211067}
    if(events.events && events.events[0].event.hasOwnProperty('lat')){
      events.events.forEach(e => {
        const {event} = e
        const marker = {
          position: {
            lat: event.lat, 
            lng: event.lng
          }
        }

        if(_.filter(markers, _.matches(marker)).length === 0){
          markers.push(marker)
          center = marker.position
        }
      })
    }

    return(
      <Card className={styles.map}>
        <CardHeader title={'CLICK_ON_MARKS_TO_INFOS'} />
        <CardMedia className={styles.googlemap}>
          <GoogleMapLoader
            containerElement={<div className={styles.maploader} />}
            googleMapElement={
              <GoogleMap
                defaultZoom={12}
                defaultCenter={center}
                options={{disableDefaultUI: true}}
              >
              {markers.map((marker, index) => {
                return(
                  <Marker key={index} {...marker} />
                )
              })}
              </GoogleMap>
            }
          />
        </CardMedia>
      </Card>
    )
  }
}

export default EventMap