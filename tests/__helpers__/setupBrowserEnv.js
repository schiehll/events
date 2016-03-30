import 'babel-polyfill'
import {jsdom} from 'jsdom'
import config from '+/config/app'
import i18n from '+/core/i18n'
import localStorageMock from './localStorageMock'

i18n.setLang({default: {}})

global.document = jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator
global.localStorage = localStorageMock()
global.CONFIG = config