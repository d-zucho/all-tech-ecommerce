import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  // Button,
  Typography,
  IconButton,
} from '@material-ui/core'
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons'
import useStyles from './styles'

const Product = ({ product }) => {
  //? allows us to use the styles imported from useStyles
  //? Notice how it looks like hook setup
  const classes = useStyles()

  return (
    <>
      <Card className={CallMissedSharp.root}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant='h5' gutterBottom>
              {product.name}
            </Typography>
            <Typography variant='h5'>{product.price}</Typography>
          </div>

          <Typography variant='body2' color='textSecondary'>
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label='Add to Card'>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default Product
