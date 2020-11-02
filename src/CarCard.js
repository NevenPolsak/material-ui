import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";
import ShareIcon from "@material-ui/icons/Share";
import {IconButton,} from "@material-ui/core";

const CarCard = (props) => {
  const {title, subtitle, description, imgSrc} = props;

  return (
    <Card>
         <CardHeader
         action={
          <IconButton aria-label="settings">
              <ShareIcon/>
          </IconButton>
         }
        title={title}
        subheader={subtitle}
        /> 
        <CardMedia style={{height: "150px"}} image={imgSrc} />
        <CardContent>
          <Typography variant="body2" component="p">
          {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">BUY NOW</Button>
        </CardActions>
    </Card>
  );
}

export default CarCard;
