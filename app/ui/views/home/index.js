import React from 'react'
import View from '+/core/View'
import {route, title, restricted} from '+/utils/decorators'
import i18n from '+/core/i18n'

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

  getUserList() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.query(`users{name email id}`, ['USER_SUCCESS', 'USER_ERROR']))
  }

  newUser() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.mutation(`newUser(
      name: "${this.userName.value}",
      email: "${this.userEmail.value}",
      password: "${this.userPassword.value}"
      ){
        name
        email
        id
      }`, 
      ['USER_CREATE_SUCCESS', 'USER_ERROR']
    ))
  }

  showUserList() : Object {
    return(
      <ul>
        {this.state.users.map(user => {
          return <li key={user.id}>{user.name} {user.email}</li>
        })}
      </ul>
    )
  }

  onRender() : Object {
    return(
      <div>
        {i18n.t('WELCOME')}
        <button onClick={this.handleBtnClick.bind(this, 'pt-BR')}>pt-BR</button>
        <button onClick={this.handleBtnClick.bind(this, 'en-US')}>en-US</button>
        <button onClick={this.logout.bind(this)}>Logout</button>
        <button onClick={this.getUserList.bind(this)}>Users</button>
        <div>
          <input ref={i => this.userName = i} type="text" placeholder="name" /><br/>
          <input ref={i => this.userEmail = i} type="text" placeholder="email" /><br/>
          <input ref={i => this.userPassword = i} type="password" placeholder="password" />
          <button onClick={this.newUser.bind(this)}>Create</button>
        </div>
        <div>{this.showUserList()}</div>
      </div>
    )
  }
}

export default Home