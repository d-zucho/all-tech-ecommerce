// *All Material-UI Imports
import {
  AppBar,
  ToolBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Toolbar,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { useStyles } from './styles'

//* images
import logo from '../../assets/images/commerce.png'

const Navbar = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          {/* **Nav Logo and Title** */}
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img
              src={logo}
              alt='All Tech'
              height='25px'
              className={classes.image}
            />
            All Tech Commerce
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
