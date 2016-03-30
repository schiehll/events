const users = (state = [], action) : Object => {
  switch (action.type) {
    case 'USER_SUCCESS':
      console.log('success', action.payload.data.users)
      return action.payload.data.users
    case 'USER_CREATE_SUCCESS':
      console.log('create success', action.payload)
      return state
    case 'USER_ERROR':
      console.log('error', action.payload)
      return []
    default:
      return state
  }
}

export default users