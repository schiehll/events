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
  closeForm() : void {
    const {dispatch, actions} = this.props
    dispatch(actions.changeForm({
      open: false,
      fields: {}
    }))
  }

  saveEvent() : void {
    const {fields} = this.state.form
    this.data = {
      name: fields.name,
      address: fields.address,
      image: fields.image,
      tags: this.getTags()
    }

    if(this.validateData()){
      this.data.date = this.getDateAndTime()
      const {dispatch, actions} = this.props
      
      dispatch(actions.saveEvent(this.data))
      dispatch(actions.progress())
      this.closeForm()
    }
  }

  validateData() : boolean {
    const {form} = this.state
    const {name, address, image, tags} = this.data
    const {dispatch, actions} = this.props
    let fields = []

    if(!name) fields.push('NAME')
    if(!address) fields.push('ADDRESS')
    if(!image) fields.push('IMAGE_URL')
    if(!form.fields.date) fields.push('DATE')
    if(!form.fields.time) fields.push('TIME')

    dispatch(actions.validate(fields))

    if(fields.length > 0){
      return false
    }

    return true
  }

  getDateAndTime() : string {
    const {fields} = this.state.form
    const [day, month, year] = formatDate(new Date(fields.date)).split('/')
    const [hour, minutes] = formatTime(new Date(fields.time)).split(':')
    const date = new Date(year, month - 1, day, hour, minutes)

    return date.toISOString()
  }

  getTags() : string[] {
    const allTags = this.state.form.fields.tags || ''
    return allTags.split('#').map(tag => tag.trim()).filter(tag => tag !== '')
  }

  updateDate(instance, date) : void {
    const {form} = this.state
    const {dispatch, actions} = this.props
    dispatch(actions.changeForm({
      open: true,
      fields: {
        ...form.fields,
        date: date
      }
    }))
  }

  updateTime(instance, time) : void {
    const {form} = this.state
    const {dispatch, actions} = this.props
    dispatch(actions.changeForm({
      open: true,
      fields: {
        ...form.fields,
        time: time
      }
    }))
  }

  handleFormValue(e) : void {
    const {form} = this.state
    const {dispatch, actions} = this.props
    dispatch(actions.changeForm({
      open: true,
      fields: {
        ...form.fields,
        [e.target.name]: e.target.value
      }
    }))
  }

  onRender() : Object {
    const {validation, form} = this.state

    return(
      <div>
        <div className={styles.title}>
          <h2>{i18n.t('ADD_EVENT_FORM_TITLE')}</h2>
          <FontIcon
            color={colors.darkPrimary} 
            className={`material-icons ${styles.close}`}
            onClick={this.closeForm.bind(this)}
          >clear</FontIcon>
        </div>
        <form className={styles.fields}>
          <TextField
            name="name"
            value={form.fields.name || ''}
            onChange={this.handleFormValue.bind(this)}
            type="text"
            hintText={i18n.t('NAME')}
            fullWidth={true}
            errorText={
              validation.fields.includes('NAME') ? i18n.t('REQUIRED') : ''
            }
          /><br/>
          <TextField
            name="address"
            value={form.fields.address || ''}
            onChange={this.handleFormValue.bind(this)}
            type="text"
            hintText={i18n.t('ADDRESS')}
            fullWidth={true}
            errorText={
              validation.fields.includes('ADDRESS') ? i18n.t('REQUIRED') : ''
            }
          /><br/>
          <TextField
            name="image"
            value={form.fields.image || ''}
            onChange={this.handleFormValue.bind(this)}
            type="text"
            hintText={i18n.t('IMAGE_URL')}
            fullWidth={true}
            errorText={
              validation.fields.includes('IMAGE_URL') ? i18n.t('REQUIRED') : ''
            }
          /><br/>
          <DatePicker 
            value={form.fields.date || ''}
            hintText={i18n.t('DATE')}
            cancelLabel={i18n.t('CANCEL')} 
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
            value={form.fields.time || ''}
            hintText={i18n.t('TIME')}
            cancelLabel={i18n.t('CANCEL')} 
            format="24hr"
            autoOk={true}
            fullWidth={true}
            onChange={this.updateTime.bind(this)}
            errorText={
              validation.fields.includes('TIME') ? i18n.t('REQUIRED') : ''
            }
          />
          <TextField
            name="tags"
            value={form.fields.tags || ''}
            onChange={this.handleFormValue.bind(this)}
            type="text"
            hintText={i18n.t('TAGS')}
            fullWidth={true}
          /><br/>
          <RaisedButton 
            secondary={true} 
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