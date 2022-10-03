import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavBarItems } from './const/navbarListItems';
import { useNavigate, useParams } from "react-router-dom";

const drawerWidth = 220;

const Navbar = () => {
  let navigate = useNavigate();

  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#CC0066',
            color: 'rgb(255, 255, 255, 0.7)'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavBarItems.map((item, index) => (
            <ListItem button 
                      key={item.id} 
                      disablePadding 
                      onClick={()=> {navigate(item.route) }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: 'rgb(255, 255, 255, 0.7)' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
  )
}

export default Navbar
