import React from 'react'
import { AppBar, Toolbar, IconButton, Tooltip, Box } from '@mui/material'
import { Menu, MenuOpen, PowerSettingsNew } from '@mui/icons-material'



function Appbar(props) {
  const { handleDrawerToggle, drawerWidth, mobileOpen } = props
  return (
    <AppBar
     position='fixed'
     sx={{
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between',
      background: 'linear-gradient(90deg, rgba(91,8,136,1) 0%, rgba(113,58,190,1) 50%, rgba(157,118,193,1) 100%)',
      color: 'primary.main',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
     }}
    >
      <Toolbar sx={{
        display: {
          xs: 'none',
          md: 'flex'
        },
        justifyContent: 'flex-start',
      }}>
        <Box sx={{ width: '200px' }}>
        <h3 style={{ color: '#ffffff' }}>QOLIGO REPORT</h3>
      </Box>
        <IconButton onClick={handleDrawerToggle}>
          <Menu sx={{ color: '#FFFFFF' }}/>
        </IconButton>
      </Toolbar>
      <Toolbar sx={{
        justifyContent: 'flex-start',
        marginRight: '.2rem'
      }}>
        <Tooltip title='Logout'>
        <IconButton>
          <PowerSettingsNew sx={{ color: '#FFFFFF' }}/>
        </IconButton>
      </Tooltip>
      </Toolbar>

    </AppBar>
  )
}

export default Appbar