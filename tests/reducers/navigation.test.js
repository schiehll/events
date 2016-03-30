import test from 'ava'
import navigation from '+/reducers/navigation'
import constants from '+/config/constants'

test('should return the initial state', async t => {
  const expected = null
  const actual = await navigation(undefined, {})

  t.same(expected, actual)
})

test('should handle the GO_TO_ROUTE action', async t => {
  const expected = '/'
  const actual = await navigation(null, {
    type: constants.GO_TO_ROUTE,
    payload: '/'
  })

  t.same(expected, actual)
})