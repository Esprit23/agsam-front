import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ViewListIcon from '@mui/icons-material/ViewList';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
// import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function  Dashboard() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
//   const [isOpen,setIsOpen]=useState(false)
//   const toggle =()=>setIsOpen(!isOpen)
  const menuItem=[
      {
          path:"/article",
          name:"Home",
          icon:<HomeIcon fontSize="large"/>
      },
      {
          path:"/dashboard",
          name:"Dashboard",
          icon:<HomeIcon fontSize="large"/>
      },
      {
          path:"/Profil",
          name:"Profil",
          icon:<SettingsApplicationsIcon fontSize="large"/>
      },
      {
          path:"/listearticle",
          name:"ListeArticle",
          
          icon:<ViewListIcon fontSize="large"/>
      },
      {
          path:"/typearticle",
          name:"typearticle",
          icon:<InfoIcon fontSize="large"/>
          
      },
     
      {
          path:"/Projet",
          name:"Projet",
          icon:<ViewListIcon fontSize="large"/>
      }
  ]

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        {
                 menuItem.map((item,index)=>(
                <NavLink to={item.path}
                 key={index} className="link"
                 disablePadding 
                 activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{display:"block"}} className="link_text">{item.name}</div>
            </NavLink>
        ))
        }
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="top_section">
              
              <h1 style={{display:"block"} } className="logo">AGSAM</h1>
                 
              </div>
              <Divider color='#000' fontSize='3px'/>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
