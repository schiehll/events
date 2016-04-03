import styles from '+/assets/styles/components/event-card.pcss'
import colors from '+/assets/styles/variables/colors.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import {formatDateAndTime} from '+/utils/date'
import i18n from '+/core/i18n'
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardActions,
  FontIcon,
  IconMenu,
  MenuItem
} from 'material-ui'

class EventCard extends DumbComponent {
  handleTagClick(tag : string) : void {
    this.props.onTagClickHandler(tag)
  }

  handleDeleteClick() : void {
    const {event, onDeleteClickHandler} = this.props
    onDeleteClickHandler({id: event.id})
  }

  onRender() : Object {
    const {event, user, tags, auth} = this.props
    return(
      <Card>
        <CardHeader
          title={event.name}
          subtitle={`@${user.name}`}
        />
        <CardMedia overlay={
          <CardTitle title={event.address} subtitle={
            <For each="tag" index="i" of={tags}>
              <span onClick={this.handleTagClick.bind(this, tag.name)} className={styles.tag} key={i}>{`#${tag.name}`}</span>
            </For>
          } />
        } >
          <img src={event.image} />
        </CardMedia>
        <CardActions>
          <CardTitle
            subtitle={
              <span>
                <FontIcon className={`material-icons ${styles.date}`} color={colors.secondaryText}>today</FontIcon> {formatDateAndTime(new Date(event.date))}
                <If condition={parseInt(user.id) === parseInt(auth.user.id)}>
                  <IconMenu 
                    targetOrigin={{vertical: 'bottom', horizontal: 'right'}} 
                    className={styles.actions} 
                    iconButtonElement={<FontIcon color={colors.secondaryText} className="material-icons">more_vert</FontIcon>}
                  >
                    <MenuItem 
                      primaryText={i18n.t('EDIT')}
                    />
                    <MenuItem 
                      primaryText={i18n.t('DELETE')}
                      onClick={this.handleDeleteClick.bind(this)}
                    />
                  </IconMenu>
                </If>
              </span>
            }
          />
        </CardActions>
      </Card>
    )
  }
}

export default EventCard