import React, { useState } from 'react'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2';
import { useRouter } from 'next/router';

function SidebarItem({
  title,
  path,
  icons,
  hasChild,
  child,
}) {
  const [open, setOpen] = useState(false)
  const { pathname, push } = useRouter()

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
    <ListItemButton
     onClick={hasChild ? () => handleOpen() : () => push(path)}
     selected={pathname === path}
     sx={{
      backgroundColor: pathname === path ? '#E5CFF7 !important' : '',
      '&:hover': {
        backgroundColor: '#E5CFF7',
        color: '#611596 !important'
      }
     }}
    >
      <ListItemIcon sx={{ minWidth: '30px' }}>
        {icons({ color: '#611596' })}
      </ListItemIcon>
      <ListItemText primary={title}
       sx={{
        fontSize: '14px',
        color: pathname === path ? '#223567 !important' : '#000000',
        '& > span': {
          fontWeight: pathname === path ? 'bold' : ''
        }
       }}
      />
      {
        hasChild && (
          open ? <HiOutlineChevronUp color='#9CA3AF' /> : <HiOutlineChevronDown color='#9CA3AF'/>
        )
      }
    </ListItemButton>
    {
      hasChild && (
        <Collapse in={open}>
          <List
           component='div'
           disablePadding
          >
            {
              child && child.map((childMenu, key) => (
                <ListItemButton
                 key={key}
                 selected={pathname === childMenu?.path}
                 sx={{
                  backgroundColor: pathname === childMenu.path ? '#E9EFFF !important' : '',
                  pl: 6,
                  ':hover': {
                    backgroundColor: '#E5CFF7'
                  }
                 }}
                 onClick={() => {push(childMenu.path)}}
                >
                  <ListItemText
                   primary={childMenu?.title}
                   sx={{
                    fontSize: '14px',
                    color: pathname === childMenu?.path ? '#223567 !important' : 'grey.400',
                    '& > span': {
                      fontWeight: pathname === childMenu?.path ? 'bold' : ''
                    }
                   }}
                  />
                </ListItemButton>
              ))
            }
          </List>
        </Collapse>
      )
    }
    </>
  )
}

export default SidebarItem