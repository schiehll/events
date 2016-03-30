import test from 'ava'
import i18n from '+/reducers/i18n'
import constants from '+/config/constants'

test('should return the initial state', async t => {
  const expected = CONFIG.DEFAULT_LANG
  const actual = await i18n(undefined, {})

  t.same(expected, actual)
})

test('should handle the SET_LANG action', async t => {
  const expected = 'pt-BR'
  const actual = await i18n('en-US', {
    type: constants.SET_LANG,
    payload: 'pt-BR'
  })

  t.same(expected, actual)
})