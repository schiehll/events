import test from 'ava'
import stringsToObject from '+/utils/stringsToObject'

test('should map an array of string in a Object', t => {
  const arrayOfStrings = [
    'SOME_STRING',
    'SOME_OTHER_STRING'
  ]

  const expected = {
    SOME_STRING: 'SOME_STRING',
    SOME_OTHER_STRING: 'SOME_OTHER_STRING'
  }
  
  const actual = stringsToObject(arrayOfStrings)

  t.same(expected, actual)
})