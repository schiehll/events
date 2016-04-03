import styles from '+/assets/styles/components/event-map.pcss'
import React from 'react'
import Component from '+/core/Component'
import {
  Card,
  CardHeader,
  CardMedia
} from 'material-ui'
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from 'react-google-maps'
import EventInfoWindow from '+/ui/components/event-info-window'
import i18n from '+/core/i18n'

class EventMap extends Component {
  openEventInfo(event : Object) : void {
    const {dispatch, actions} = this.props
    dispatch(actions.openEventInfo(event))
  }

  onRender() : Object {
    let markers = []
    const {events, map} = this.state

    const bounds = new google.maps.LatLngBounds()


    if(events.events){
      const eventsWithoutPosition = events.events.filter(e => {
        return !e.event.lat || !e.event.lng
      })

      if(eventsWithoutPosition.length === 0){
        events.events.forEach((e, index) => {
          const {event} = e
          const marker = {
            event: event,
            position: {
              lat: parseFloat(event.lat), 
              lng: parseFloat(event.lng)
            }
          }

          let exist = false
          markers.forEach(mark => {
            if(mark.position.lat === marker.position.lat 
              && mark.position.lng === marker.position.lng){
              exist = true
              return
            }
          })

          if(!exist){
            markers.push(marker)
            bounds.extend(new google.maps.LatLng(marker.position.lat, marker.position.lng))
          }
        })
      }
    }

    let center = {
      lat: bounds.getCenter().lat(),
      lng: bounds.getCenter().lng()
    }

    if(map.event.hasOwnProperty('id')){
      center = {
        lat: parseFloat(map.event.lat),
        lng: parseFloat(map.event.lng)
      }
    }

    return(
      <Card className={styles.map}>
        <If condition={events.events}>
          <CardHeader title={i18n.t('CLICK_ON_MARKS_TO_INFOS')} />
          <CardMedia>
            <GoogleMapLoader
              containerElement={<div className={styles.googlemap} />}
              googleMapElement={
                <GoogleMap
                  defaultZoom={6}
                  center={center}
                  options={{disableDefaultUI: true}}
                >
                {markers.map((marker, index) => {
                  return(
                    <Marker 
                      key={index} 
                      position={marker.position}
                      onClick={this.openEventInfo.bind(this, marker.event)}
                    >
                      <If condition={map.event.hasOwnProperty('id') && map.event.id === marker.event.id}>
                        <InfoWindow>
                          <EventInfoWindow {...marker.event} />
                        </InfoWindow>
                      </If>
                    </Marker>
                  )
                })}
                </GoogleMap>
              }
            />
          </CardMedia>
        <Else />
          <CardHeader
            title={i18n.t('NO_EVENTS_TITLE')}
            subtitle={i18n.t('NO_EVENTS_SUBTITLE')}
          />
        </If>
      </Card>
    )
  }
}

export default EventMap