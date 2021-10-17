import { Favorite, Lightbulb, List, Search } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar, Typography, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useHistory } from 'react-router'

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ColorModeContext from '../utils/colorModeContext'

interface navProps {

}

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))


const TopNavbar = (props: navProps) => {
  const classes = useStyles()
  const history = useHistory()
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <AppBar className={classes.root} position="static" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie.io
        </Typography>
        <IconButton onClick={() => history.push('/')} color="inherit">
          <List />
        </IconButton>
        <IconButton onClick={() => history.push('/search')} color="inherit">
          <Search />
        </IconButton>
        <IconButton onClick={() => history.push('/favourites')} color="inherit">
          <Favorite />
        </IconButton>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default TopNavbar
