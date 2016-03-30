class Auth {
  _fetch(data : string, token : boolean = false) : Promise {
    return new Promise((resolve, reject) => {
      let headers = {
        'Content-Type': 'application/graphql'
      }

      if(token){
        headers['Authorization'] = `Bearer ${localStorage.getItem(`${CONFIG.STORAGE_KEY}.jwt`)}`
      }

      fetch(CONFIG.API_URL, {
        method: 'post',
        headers,
        body: data
      }).then(response => {
        return response.json()
      }).then(json => {
        resolve(json)
      }).catch(err => {
        reject(err)
      })
    })
  } 

  login(user : Object) : Promise {
    const data = `query {
      auth(email: "${user.email}", password: "${user.password}"){
        user{
          id
          name
        }
        token
      }
    }`

    return this._fetch(data)
  }

  loginWithToken() : Promise {
    const data = `query {
      authWithToken{
        user{
          id
          name
        }
      }
    }`

    return this._fetch(data, true)
  }

  logout() : Promise {
    return new Promise(resolve => {
      localStorage.removeItem(`${CONFIG.STORAGE_KEY}.jwt`)
      resolve()
    })
  }
}

export default new Auth