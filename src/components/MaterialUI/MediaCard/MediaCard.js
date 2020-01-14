import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { withRouter } from 'react-router-dom';
import * as R from 'ramda';

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
  },
  media: {
    height: 180,
  },
});

function MediaCard(props) {
  const { id, img, title, description, downloads } = props.gameInfo.game;
  const classes = useStyles();

  const clickHandler = id => {
    props.history.push(`/games/${id}`);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => clickHandler(id)}>
        <CardMedia className={classes.media} image={img} title="Game Card" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${R.take(50, description)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="primary" component="p">
          {`Downloads: ${downloads}`}
        </Typography>
      </CardActions>
    </Card>
  );
}
export default withRouter(MediaCard);
