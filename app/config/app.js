import dotenv from 'dotenv'

dotenv.config({silent: true})

export default {
  INDEX_ROUTE: 'home',
  DEFAULT_LANG: 'pt-BR',
  ENV: process.env.NODE_ENV || 'local',
  NAME: process.env.npm_package_name || 'App',
  STORAGE_KEY: process.env.STORAGE_KEY || 'storagekey',
  API_URL: process.env.API_URL || 'http://localhost:3000',
  GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY || '',
  GOOGLE_MAPS_KEY_FALLBACK: process.env.GOOGLE_MAPS_KEY_FALLBACK || '',
}