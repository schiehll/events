import test from 'ava'
import Router from '+/core/Router'
import config from '+/config/app'

import * as allViews from 'glob:../../app/ui/views/**/index.js'

test('should load all views', t => {
  const expected = Object.values(allViews).length
  const actual = Router.views.length
  t.same(actual, expected)
})

test('should have the routes paths', t => {
  t.ok(Object.keys(Router.routes).length > 0)
})

test('should make the view with the "*" route be the last one', t => {
  const expected = '*'
  const actual = Router.routeConfig.childRoutes[Router.views.length - 1].path

  t.same(actual, expected)
})

test('should make the configured INDEX_ROUTE the actual index route', t => {
  const route = Router.routeConfig.childRoutes.find(r => {
    return r.name === config.INDEX_ROUTE
  })

  const expected = route.component
  const actual = Router._getIndexRouteComponent()

  t.same(actual, expected)
})