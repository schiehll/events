import test from 'ava'
import React from 'react'
import View from '+/core/View'
import Home from '+/ui/views/home'

test('should extends View', t => {
  t.ok(Home.prototype instanceof View)
})