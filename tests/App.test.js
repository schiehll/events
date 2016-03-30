import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import App from '+/App'
import Home from '+/ui/views/home'
import Helmet from 'react-helmet'

test('should extends React.Component', t => {
  t.ok(App.prototype instanceof React.Component)
})

test('should have a Helmet component as child', t => {
  const component = shallow(
    <App>
      <Home />
    </App>
  )
  const actual = component.find(Helmet).length
  const expected = 1
  t.same(actual, expected)
})