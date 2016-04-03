import test from 'ava'
import config from '+/config/app'

test('should contains the required info', t => {
  const expected = [
    'INDEX_ROUTE',
    'DEFAULT_LANG',
    'ENV',
    'NAME',
    'STORAGE_KEY',
    'API_URL',
    'GOOGLE_MAPS_KEY',
    'GOOGLE_MAPS_KEY_FALLBACK'
  ]
  const actual = Object.keys(config)

  t.same(actual, expected)
})