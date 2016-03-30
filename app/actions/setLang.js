import i18n from '+/core/i18n'
import constants from '+/config/constants'

const {SET_LANG} = constants

const setLang = (language : string) : Function => {
  return dispatch => {
    const action = {
      type: SET_LANG,
      payload: language
    }

    const loadLang : Function = i18n.loadLangData(language)
    loadLang().then(lang => {
      i18n.setLang(lang)
      localStorage.setItem(`${CONFIG.STORAGE_KEY}.lang`, language)
      dispatch(action)
    })
  }
}

export default setLang