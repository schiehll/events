export const getLatLng = (e : Object) : Promise => {
  const {event}  = e
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${event.address}&key=${CONFIG.GOOGLE_MAPS_KEY}`
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      return response.json()
    }).then(response => {
      console.log('response api', response);
      if(response.status === 'OK'){
        resolve({
          ...e,
          event: {
            ...event,
            ...response.results[0].geometry.location
          }
        })
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
