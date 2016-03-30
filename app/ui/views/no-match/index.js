import React from 'react'
import View from '+/core/View'
import {route, title} from '+/utils/decorators'
import i18n from '+/core/i18n'

@route({
  name: 'nomatch',
  path: '*'
})
@title('No Match')
class NoMatch extends View {
  handleBtnClick() : void {
    const {dispatch, actions, routes} = this.props
    dispatch(actions.goTo(routes.home))
  }

  onRender() : Object {
    return(
      <div>
        {i18n.t('NO_MATCH')}
        <button onClick={this.handleBtnClick.bind(this)}>Home</button>
      </div>
    )
  }
}

export default NoMatch