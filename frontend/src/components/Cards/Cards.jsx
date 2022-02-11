import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards(props) {
  return (
    <Card  className='col-lg-3' sx={{ marginLeft:'20px' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.pname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          xyz
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}
