import styles from '+/assets/styles/components/header.pcss'
import colors from '+/assets/styles/variables/colors.pcss'
import css from 'react-css-modules'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import Logo from '+/ui/components/logo'
import i18n from '+/core/i18n'
import {
  MenuItem,
  IconMenu,
  FontIcon
} from 'material-ui'

@css(styles)
class Header extends DumbComponent {
  onRender() : Object {
    return(
      <div styleName="header">
        <div styleName="logo"><Logo /></div>
        <div styleName="user">
          {this.props.user.name}
          <IconMenu styleName="menu" iconButtonElement={<FontIcon color={colors.alternateText} className="material-icons">arrow_drop_down</FontIcon>}>
            <MenuItem 
              primaryText={i18n.t('LOGOUT')} 
              onClick={this.props.onLogout}
            />
          </IconMenu>
        </div>
      </div>
    )
  }
}

export default Header