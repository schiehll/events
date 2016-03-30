import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import Root from '+/core/Root'
import {Router} from 'react-router'

test('should extends React.Component', t => {
  t.ok(Root.prototype instanceof React.Component)
})

test('should have a Router component as child', t => {
  const component = shallow(<Root />)
  const actual = component.find(Router).length
  const expected = 1
  t.same(actual, expected)
})