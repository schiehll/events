import styles from '+/assets/styles/components/event-card.pcss'
import colors from '+/assets/styles/variables/colors.pcss'
import React from 'react'
import DumbComponent from '+/core/DumbComponent'
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
              <span className={styles.tag} key={i}>{`#${tag.name}`}</span>
            </For>
          } />
        } >
          <img src={event.image} />
        </CardMedia>
        <CardActions>
          <CardTitle
            subtitle={
              <span>
                <FontIcon className={`material-icons ${styles.date}`} color={colors.secondaryText}>today</FontIcon> {event.date}
                <If condition={parseInt(user.id) === parseInt(auth.user.id)}>
                  <IconMenu 
                    targetOrigin={{vertical: 'bottom', horizontal: 'right'}} 
                    className={styles.actions} 
                    iconButtonElement={<FontIcon color={colors.text} className="material-icons">more_vert</FontIcon>}
                  >
                    <MenuItem 
                      primaryText="editar"
                    />
                    <MenuItem 
                      primaryText="excluir"
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