import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import View from '+/core/View'
import NoMatch from '+/ui/views/no-match'
import reduxStore from '../../../__helpers__/reduxStore'

test('should extends View', t => {
  t.ok(NoMatch.prototype instanceof View)
})

test('should have a route configured', t => {
  const component = shallow(<NoMatch store={reduxStore} />)
  const noMatchInstance = component.instance()
  t.ok(noMatchInstance.constructor.route)
})