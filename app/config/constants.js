import stringsToObject from '+/utils/stringsToObject'

const constants : string[] = [
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_ERROR',
  'LOGOUT',
  'SET_LANG',
  'GO_TO_ROUTE',
  'SNACKBAR',
  'PROGRESS',
  'CHANGE_TAB',
  'CHANGE_SUBTITLE',
  'EVENTS_SUCCESS',
  'EVENTS_ERROR',
  'EVENT_REMOVED',
  'SHOW_EVENT_INFO'
]

export default stringsToObject(constants)