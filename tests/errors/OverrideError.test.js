import test from 'ava'
import OverrideError from '+/errors/OverrideError'

test('should extends Error', t => {
  t.ok(OverrideError.prototype instanceof Error)
})

test('should accept a method and a class name as argument', t => {
  const methodName = 'method'
  const extendedClass = 'ExtendedClass'
  const err = new OverrideError(methodName, extendedClass)

  t.ok(err.message.includes(methodName))
  t.ok(err.message.includes(extendedClass))
})