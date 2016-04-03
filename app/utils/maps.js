const keys = [CONFIG.GOOGLE_MAPS_KEY, CONFIG.GOOGLE_MAPS_KEY_FALLBACK]

export const getLatLng = (e : Object) : Promise => {
  const {event}  = e

  const eventLat = localStorage.getItem(`${CONFIG.STORAGE_KEY}.${event.address}.lat`)
  const eventLng = localStorage.getItem(`${CONFIG.STORAGE_KEY}.${event.address}.lng`)

  if(eventLat !== null && eventLng !== null){
    return Promise.resolve({
      ...e,
      event: {
        ...event,
        lat: eventLat,
        lng: eventLng
      }
    })
  }

  let key = localStorage.getItem(`${CONFIG.STORAGE_KEY}.maps`)
  if(!key){
    key = keys[0]
    localStorage.setItem(`${CONFIG.STORAGE_KEY}.maps`, key)
  }
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${event.address}&key=${key}`
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      return response.json()
    }).then(response => {
      if(response.status === 'OK'){
        const {lat, lng} = response.results[0].geometry.location
        localStorage.setItem(`${CONFIG.STORAGE_KEY}.${event.address}.lat`, lat)
        localStorage.setItem(`${CONFIG.STORAGE_KEY}.${event.address}.lng`, lng)
        resolve({
          ...e,
          event: {
            ...event,
            ...response.results[0].geometry.location
          }
        })
      }
      else if(response.status === 'OVER_QUERY_LIMIT'){
        const diffKeys = keys.filter(k =>{
          return k !== key
        })

        localStorage.setItem(`${CONFIG.STORAGE_KEY}.maps`, diffKeys[0])
        throw new Error('OVER_QUERY_LIMIT')
      }
      else{
        throw new Error('CANT_GET_LAT_LNG')
      }
    }).catch(err => {
      console.error(err)
      reject(err)
    })
  })
}
