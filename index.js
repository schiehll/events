import React from 'react'
import ReactDOM from 'react-dom'
import i18n from '+/core/i18n'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const loadLang = i18n.loadLangData(localStorage.getItem(`${CONFIG.STORAGE_KEY}.lang`) || CONFIG.DEFAULT_LANG)
const appRoot : Object = document.getElementById('app')

let render : Function = () : void => {
  const Root : Object = require('./app/core/Root').default
  ReactDOM.render(<Root />, appRoot)
}

if(module.hot) {
  const renderApp : Function = render
  const renderError : Function = (error : Object) : void => {
    const RedBox : Object = require('redbox-react')
    ReactDOM.render(<RedBox error={error} />, appRoot)
  }
  
  render = () => {
    try {
      renderApp()
    } 
    catch (error) {
      renderError(error)
    }
  }

  module.hot.accept('./app/core/Root', () : void => {
    setTimeout(render)
  })
}

loadLang().then(lang => {
  i18n.setLang(lang)
  render()
})