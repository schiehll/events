import test from 'ava'
import React from 'react'
import Provider from '+/core/Provider'

test('should extends React.Component', t => {
  t.ok(Provider.prototype instanceof React.Component)
})