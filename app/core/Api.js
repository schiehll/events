class Api {
  _fetch(data : string) : Promise {
    return new Promise(resolve => {
      fetch(CONFIG.API_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/graphql',
          'Authorization': `Bearer ${localStorage.getItem(`${CONFIG.STORAGE_KEY}.jwt`)}`
        },
        body: data
      }).then(response => {
        return response.json()
      }).then(json => {
        resolve(json)
      })
    })
  }

  query(query : string) : Promise {
    const data = `query {${query}}`
    return this._fetch(data)
  }

  mutate(mutation : string) : Promise {
    const data = `mutation {${mutation}}`
    return this._fetch(data)
  }
}

export default new Api