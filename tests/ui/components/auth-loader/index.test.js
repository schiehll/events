import test from 'ava'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import AuthLoader from '+/ui/components/auth-loader'

test('should extends DumbComponent', t => {
  t.ok(AuthLoader.prototype instanceof DumbComponent)
})