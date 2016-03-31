import React from 'react'
import View from '+/core/View'
import {route, title, restricted} from '+/utils/decorators'

@route({
  name: 'home',
  path: '/'
})
@title('Home')
@restricted
class Home extends View {
  handleBtnClick(lang : string) : void {
    const {dispatch, actions} = this.props
    dispatch(actions.setLang(lang))
  }

  logout() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.logout())
  }

  onRender() : Object {
    return(
      <div>
        <button onClick={this.handleBtnClick.bind(this, 'pt-BR')}>pt-BR</button>
        <button onClick={this.handleBtnClick.bind(this, 'en-US')}>en-US</button>
        <button onClick={this.logout.bind(this)}>Logout</button>
      </div>
    )
  }
}

export default Home