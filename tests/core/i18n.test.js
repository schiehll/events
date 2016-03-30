import test from 'ava'
import React from 'react'
import i18n from '+/core/i18n'

test('should accept a lang object and translate by key', t => {
  i18n.setLang({default: {
    SOME_KEY: 'Some message!'
  }})

  const expected = 'Some message!'
  const actual = i18n.t('SOME_KEY')

  t.same(expected, actual)
})