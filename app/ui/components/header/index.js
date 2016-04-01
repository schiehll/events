import styles from '+/assets/styles/components/header.pcss'
import colors from '+/assets/styles/variables/colors.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import Logo from '+/ui/components/logo'
import i18n from '+/core/i18n'
import {
  MenuItem,
  IconMenu,
  FontIcon
} from 'material-ui'

class Header extends DumbComponent {
  onRender() : Object {
    return(
      <div>
        <div className={styles.header}>
          <div className={styles.logo}><Logo /></div>
          <div className={styles.user}>
            {this.props.user.name}
            <IconMenu className={styles.menu} iconButtonElement={<FontIcon color={colors.alternateText} className="material-icons">arrow_drop_down</FontIcon>}>
              <MenuItem 
                primaryText={i18n.t('LOGOUT')} 
                onClick={this.props.onLogout}
              />
            </IconMenu>
          </div>
        </div>
      </div>
    )
  }
}

export default Header