import React from 'react'
import DumbComponent from '+/core/DumbComponent'
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardActions,
  FlatButton
} from 'material-ui'

class EventCard extends DumbComponent {
  onRender() : Object {
    return(
      <Card>
        <CardHeader
          title="Event Name"
          subtitle="@uername"
        />
        <CardMedia
          overlay={<CardTitle title="Rua Luiz Pasteur, 45 - São Leopoldo - RS" subtitle="04/10/2016 - 23:30" />}
        >
          <img src="http://lorempixel.com/300/300/nightlife/" />
        </CardMedia>
        <CardActions>
          <FlatButton label="Tag 1" />
        </CardActions>
      </Card>
    )
  }
}

export default EventCard