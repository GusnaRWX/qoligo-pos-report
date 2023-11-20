import React, { useState } from 'react'
import { Box, Container, List, Typography } from '@mui/material'
import Appbar from '../AppBar/Index'
import { styled } from '@mui/material/styles';
import DrawerCore from '../Drawer/Index';
import { Menus } from '../Drawer/menu';
import SidebarItem from '../Drawer/SidebarItem';

const drawerWidth = 230
const MainComponent = styled(Box)(({theme}) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.secondary.light,
  overflow: 'auto',
  height: '100vh'
}))

const container = typeof window !== 'undefined' ? () => window.document.body : undefined;

const drawer = (
  <Box>
    <List>
      {
        Menus?.map(menu => (
          <SidebarItem
           key={menu?.key}
           title={menu?.title}
           path={menu?.path}
           icons={menu?.icons}
           hasChild={menu?.hasChild}
           child={menu?.child}
          />
        ))
      }
    </List>
  </Box>
)

function Layout({
  children
}) {
  const [mobileOpen, setMobileOpen] = useState(true)
  const handleDrawerToggle = () => {
    setMobileOpen((mobile) => !mobile);
  };

  return (
    <Box
     sx={{
      display: 'flex'
     }}
    >
      <Appbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
      <DrawerCore
       drawerWidth={drawerWidth}
       container={container}
       mobileOpen={mobileOpen}
       handleDrawerToggle={handleDrawerToggle}
       drawer={drawer}
      />
      <MainComponent component='main'>
        <Container
         maxWidth='xl'
         sx={{
            paddingTop: '90px',
            paddingLeft: '35px !important',
            paddingRight: '35px !important',
            paddingBottom: '33px'
          }}
        >
          {children}
        </Container>
      </MainComponent>
    </Box>
  )
}

export default Layout