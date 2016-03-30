import test from 'ava'
import React from 'react'
import Component from '+/core/Component'
import OverrideError from '+/errors/OverrideError'
import reduxStore from '../__helpers__/reduxStore'

test('should extends React.Component', t => {
  t.ok(Component.prototype instanceof React.Component)
})

test('should throws an Error on call onRender method', t => {
  class SomeClass extends Component {}

  const err = new OverrideError('onRender', 'Component')
  const someClassInstance = new SomeClass({}, {store: reduxStore})

  t.throws(someClassInstance.onRender, err.message)
})