import colors from '+/assets/styles/variables/colors.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import {FontIcon} from 'material-ui'

class Logo extends DumbComponent {
  onRender() : Object {
    return(
      <div className="logo">
        <FontIcon className="material-icons" color={colors.alternateText}>track_changes</FontIcon> events
      </div>
    )
  }
}

export default Logo