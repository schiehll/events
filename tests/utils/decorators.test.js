import test from 'ava'
import {restricted, route, title} from '+/utils/decorators'

test('classes with the restricted decorator should have a restricted attribute set to true', t => {
  @restricted
  class SomeClass{}

  const someClassInstance = new SomeClass
  t.ok(someClassInstance.constructor.restricted === true)
})

test('classes with the route decorator should have a route attribute with the given args', t => {
  const expected = {
    name: 'home',
    path: '/home/path'
  }

  @route(expected)
  class SomeClass{}

  const someClassInstance = new SomeClass
  const actual = someClassInstance.constructor.route
  t.same(actual, expected)
})

test('classes with the title decorator should have a title attribute with the given string', t => {
  const expected = 'Title'

  @title(expected)
  class SomeClass{}

  const someClassInstance = new SomeClass
  const actual = someClassInstance.constructor.title
  t.same(actual, expected)
})