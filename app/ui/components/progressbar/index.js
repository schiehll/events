import React from 'react'
import Component from '+/core/Component'
import ProgressBar from 'react-progress-bar-plus'

class Progressbar extends Component {
  componentDidUpdate() : void {
    const {dispatch, actions} = this.props
    const {loading, progress} = this.state
    if(progress.percent === 1 && loading.done){
      dispatch(actions.progress({
        percent: 100,
        increment: false 
      }))

      setTimeout(() => {
        dispatch(actions.progress({
          percent: -1,
          increment: false 
        }))
      }, 1000)
    }
  }

  onRender() : Object {
    const {progress} = this.state
    
    return(
      <ProgressBar 
        percent={progress.percent} 
        autoIncrement={progress.increment}
      />
    )
  }
}

export default Progressbar