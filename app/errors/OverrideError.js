class OverrideError extends Error {
  constructor(method : string, extended : string) : void {
    let message = `${method} method should be override by all classes that extends ${extended}.`
    super(message)
    this.message = message
    this.name = this.constructor.name
  }
} 

export default OverrideError