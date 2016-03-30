import test from 'ava'
import auth from '+/reducers/auth'
import constants from '+/config/constants'

test.beforeEach(t => {
  t.context.defaultState = {
    user: {},
    isAuthenticated: false
  }
})

test('should return the initial state', async t => {
  const expected = t.context.defaultState
  const actual = await auth(undefined, {})

  t.same(expected, actual)
})

test('should handle the LOGIN_REQUEST action', async t => {
  const expected = t.context.defaultState
  const actual = await auth(expected, {
    type: constants.LOGIN_REQUEST
  })

  t.same(expected, actual)
})

test('should handle the LOGIN_SUCCESS action', async t => {
  const expected = {
    user: {
      name: 'userTest'
    },
    isAuthenticated: true
  }
  const actual = await auth(t.context.defaultState, {
    type: constants.LOGIN_SUCCESS,
    payload: expected
  })

  t.same(expected, actual)
})

test('should handle the LOGIN_ERROR action', async t => {
  const expected = {
    user: {},
    isAuthenticated: false,
    error: 'SOME_ERROR_MESSAGE'
  }
  const actual = await auth(t.context.defaultState, {
    type: constants.LOGIN_ERROR,
    payload: expected
  })

  t.same(expected, actual)
})

test('should handle the LOGOUT action', async t => {
  const expected = t.context.defaultState
  const actual = await auth(expected, {
    type: constants.LOGOUT,
    payload: expected
  })

  t.same(expected, actual)
})