import React from 'react'
import { Drawer, Collapse } from '@mui/material'
import {styled} from '@mui/material/styles'

const CustomDrawer = styled(Drawer)(({ drawerWidth }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    minWidth: '230px',
    boxSizing: 'border-box',
    backgroundColor: '#FFFFFF',
    border: 'none',
    boxShadow: '0px 6px 20px 0px rgba(0, 0, 0, 0.05)',
    marginTop: '66px',
    '::-webkit-scrollbar': {
      //width: '8px'
      display: 'none'
    },
  }
}))

function DrawerCore({
  drawerWidth,
  container,
  mobileOpen,
  drawer,
  handleDrawerToggle
}) {
  return (
    <Collapse
     component='nav'
     in={mobileOpen}
     orientation='horizontal'
     aria-label='mailbox folders'
    >
     <CustomDrawer
      drawerWidth={drawerWidth}
      variant='temporary'
      container={container}
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true
      }}
      sx={{
        display: {
          xs: 'block',
          md: 'none'
        }
      }}
     >
      {drawer}
     </CustomDrawer>
     <CustomDrawer
      drawerWidth={drawerWidth}
      variant='persistent'
      anchor='left'
      open={mobileOpen}
     >
      {drawer}
     </CustomDrawer>
    </Collapse>
  )
}

export default DrawerCore