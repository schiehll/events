import constants from '+/config/constants'

const {SET_LANG} = constants

const i18n = (state = CONFIG.DEFAULT_LANG, action) : string => {
  switch (action.type) {
    case SET_LANG:
      return action.payload
    default:
      return state
  }
}

export default i18n