import test from 'ava'
import React from 'react'
import View from '+/core/View'
import OverrideError from '+/errors/OverrideError'
import reduxStore from '../__helpers__/reduxStore'

test('should extends React.Component', t => {
  t.ok(View.prototype instanceof React.Component)
})

test('should throws an Error on call onRender method', t => {
  class SomeClass extends View {}

  const err = new OverrideError('onRender', 'View')
  const someClassInstance = new SomeClass({}, {store: reduxStore})

  t.throws(someClassInstance.onRender, err.message)
})