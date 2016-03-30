import test from 'ava'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import OverrideError from '+/errors/OverrideError'

test('should extends React.Component', t => {
  t.ok(DumbComponent.prototype instanceof React.Component)
})

test('should throws an Error on call onRender method', t => {
  class SomeClass extends DumbComponent {}

  const err = new OverrideError('onRender', 'DumbComponent')
  const someClassInstance = new SomeClass()

  t.throws(someClassInstance.onRender, err.message)
})