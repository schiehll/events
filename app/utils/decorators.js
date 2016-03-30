import View from '+/core/View'

export const restricted : Function = (target : Class<View>) : void => {
  target.restricted = true
}

export const route : Function = (value : Object) : Function => {
  const decorator : Function = (target : Class<View>) : void => {
    target.route = value
  }

  return decorator
}

export const title : Function = (title : string) : Function => {
  const decorator : Function = (target : Class<View>) : void => {
    target.title = title
  }

  return decorator
}