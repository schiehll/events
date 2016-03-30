import test from 'ava'
import config from '+/config/app'

test('should contains the required info', t => {
  const expected = [
    'INDEX_ROUTE',
    'DEFAULT_LANG',
    'ENV',
    'NAME',
    'STORAGE_KEY',
    'API_URL'
  ]
  const actual = Object.keys(config)

  t.same(actual, expected)
})