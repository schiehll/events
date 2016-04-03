import styles from '+/assets/styles/components/event-form.pcss'
import colors from '+/assets/styles/variables/colors.pcss'
import React from 'react'
import Component from '+/core/Component'
import {
  FontIcon,
  TextField,
  RaisedButton,
  DatePicker,
  TimePicker
} from 'material-ui'
import i18n from '+/core/i18n'
import {formatDate, formatTime} from '+/utils/date'

class EventForm extends Component {
  handleCloseClick() : void {
    this.props.onCloseFormClickHandler()
  }

  saveEvent() : void {
    this.data = {
      name: this.name.refs.input.value,
      address: this.address.refs.input.value,
      image: this.image.refs.input.value,
      tags: this.getTags()
    }

    if(this.validateData()){
      this.data.date = this.getDateAndTime()
      console.log('can send', this.data);
    }
  }

  validateData() : boolean {
    const {name, address, image, tags} = this.data
    const {dispatch, actions} = this.props
    let fields = []

    if(!name) fields.push('NAME')
    if(!address) fields.push('ADDRESS')
    if(!image) fields.push('IMAGE_URL')
    if(!this.date) fields.push('DATE')
    if(!this.time) fields.push('TIME')

    dispatch(actions.validate(fields))

    if(fields.length > 0){
      return false
    }

    return true
  }

  getDateAndTime() : string {
    const [day, month, year] = this.date.split('/')
    const [hour, minutes] = this.time.split(':')
    const date = new Date(year, month - 1, day, hour, minutes)

    return date.toISOString()
  }

  getTags() : string[] {
    return this.tags.refs.input.value.split('#').map(tag => tag.trim()).filter(tag => tag !== '')
  }

  updateDate(instance, date) : void {
    this.date = formatDate(date)
  }

  updateTime(instance, time) : void {
    this.time = formatTime(time)
  }

  onRender() : Object {
    const {validation} = this.state

    return(
      <div>
        <div className={styles.title}>
          <h2>{i18n.t('ADD_EVENT_FORM_TITLE')}</h2>
          <FontIcon
            color={colors.darkPrimary} 
            className={`material-icons ${styles.close}`}
            onClick={this.handleCloseClick.bind(this)}
          >clear</FontIcon>
        </div>
        <form className={styles.fields}>
          <TextField
            type="text"
            ref={i => this.name = i}
            hintText={i18n.t('NAME')}
            fullWidth={true}
            errorText={
              validation.fields.includes('NAME') ? i18n.t('REQUIRED') : ''
            }
          /><br/>
          <TextField
            type="text"
            ref={i => this.address = i}
            hintText={i18n.t('ADDRESS')}
            fullWidth={true}
            errorText={
              validation.fields.includes('ADDRESS') ? i18n.t('REQUIRED') : ''
            }
          /><br/>
          <TextField
            type="text"
            ref={i => this.image = i}
            hintText={i18n.t('IMAGE_URL')}
            fullWidth={true}
            errorText={
              validation.fields.includes('IMAGE_URL') ? i18n.t('REQUIRED') : ''
            }
          /><br/>
          <DatePicker 
            hintText={i18n.t('DATE')}
            wordings={{cancel: i18n.t('CANCEL')}} 
            minDate={new Date()}
            autoOk={true} 
            locale={i18n.locale} 
            DateTimeFormat={Intl.DateTimeFormat} 
            formatDate={formatDate}
            fullWidth={true}
            onChange={this.updateDate.bind(this)}
            errorText={
              validation.fields.includes('DATE') ? i18n.t('REQUIRED') : ''
            }
          />
          <TimePicker
            hintText={i18n.t('TIME')}
            format="24hr"
            autoOk={true}
            fullWidth={true}
            onChange={this.updateTime.bind(this)}
            errorText={
              validation.fields.includes('TIME') ? i18n.t('REQUIRED') : ''
            }
          />
          <TextField
            type="text"
            ref={i => this.tags = i}
            hintText={i18n.t('TAGS')}
            fullWidth={true}
          /><br/>
          <RaisedButton 
            primary={true} 
            label={i18n.t('SAVE')} 
            fullWidth={true}
            style={{marginTop: 10}}
            onClick={this.saveEvent.bind(this)}
          />
        </form>
      </div>
    )
  }
}

export default EventForm