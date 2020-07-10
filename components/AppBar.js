//Import komponen-komponen
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { primary, blackMain } from '../utils/lib'

// create custom style, styling 
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  icon: {
    height: 40,
    width: 40
  },
  navOption: {
    borderBottom: '3px solid transparent',
    cursor: 'pointer',
    fontFamily: 'Poppins',
    fontSize: 16,
    marginLeft: 48,
  },
  activeNavOption: {
    borderBottom: `3px solid ${primary}`,
  }
}))

export default function MenuAppBar() {
  // use router to get url
  const router = useRouter()

  const classes = useStyles()

  // create state from useState React
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  // handling open modal
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  // handling close modal
  const handleClose = () => {
    setAnchorEl(null)
  }

  // use media query for mobile size
  const mobileSize = useMediaQuery('(max-width: 768px)')

  //compile to screen
  return (
    <AppBar position="fixed" style={{ background: blackMain }}>
      <Container>
        <Toolbar>
          {/* Mobile Navigation Link */}
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            edge="start"
            style={{ display: mobileSize ? 'block' : 'none', paddingLeft: 0, marginRight: 0 }}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            {/* link to the page */}
            <Link href='/global'>
              <MenuItem style={{ color: router.pathname == '/global' && primary }}>Global</MenuItem>
            </Link>
            <Link href='/indonesia'>
              <MenuItem style={{ color: router.pathname == '/indonesia' && primary }}>Indonesia</MenuItem>
            </Link>
            <Link href='/absensi'>
              <MenuItem style={{ color: router.pathname == '/absensi' && primary }}>Absensi</MenuItem>
            </Link>
            <Link href='/checkup'>
              <MenuItem style={{ color: router.pathname == '/chekcup' && primary }}>Checkup</MenuItem>
            </Link>
          </Menu>

          {/* Icon */}
          <Link href='/'>
            <img src="assets/img/icon.png" style={{ cursor: 'pointer', height: 40, width: 40 }} />
          </Link>

          {/* Navigation Bar Link */}
          <div style={{ display: mobileSize ? 'none' : 'flex', flexDirection: 'row' }}>
            <Link href='/global'>
              <Typography variant="h6" className={classes.navOption} style={{ borderBottom: router.pathname == '/global' && `3px solid ${primary}` }}>
                Global
            </Typography>
            </Link>
            <Link href='/indonesia'>
              <Typography variant="h6" className={classes.navOption} style={{ borderBottom: router.pathname == '/indonesia' && `3px solid ${primary}` }}>
                Indonesia
              </Typography>
            </Link>
            <Link href='/absensi'>
              <Typography variant="h6" className={classes.navOption} style={{ borderBottom: router.pathname == '/absensi' && `3px solid ${primary}` }}>
                Absensi
            </Typography>
            </Link>
            <Link href='/checkup'>
              <Typography variant="h6" className={classes.navOption} style={{ borderBottom: router.pathname == '/checkup' && `3px solid ${primary}` }}>
                Checkup
            </Typography>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}