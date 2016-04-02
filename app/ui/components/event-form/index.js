import styles from '+/assets/styles/components/event-form.pcss'
import colors from '+/assets/styles/variables/colors.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import {FontIcon} from 'material-ui'
import i18n from '+/core/i18n'

class EventForm extends DumbComponent {
  handleCloseClick() : void {
    this.props.onCloseFormClickHandler()
  }

  onRender() : Object {
    return(
      <div>
        <div className={styles.title}>
          <h2>{i18n.t('ADD_EVENT_FORM_TITLE')}</h2>
          <FontIcon
            color={colors.text} 
            className={`material-icons ${styles.close}`}
            onClick={this.handleCloseClick.bind(this)}
          >clear</FontIcon>
        </div>
      </div>
    )
  }
}

export default EventForm