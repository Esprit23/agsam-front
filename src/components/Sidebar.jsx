import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ViewListIcon from '@mui/icons-material/ViewList';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import InfoIcon from '@mui/icons-material/Info';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { Drawer, Hidden, makeStyles } from "@mui/material";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import "./sideBar.css"
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Sidebar({isMobile,funcSetIsMobile}){
    const [isOpen,setIsOpen]=useState(false)
    const toggle =()=>setIsOpen(!isOpen)
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<LineStyleIcon className='sidebarIcon'/>
        },
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<BubbleChartIcon fontSize="large" className='sidebarIcon'/>
        },
        {
            path:"/ProfilUser",
            name:"user",
            icon:<PersonOutlineIcon className='sidebarIcon'/>
        },
        {
            path:"/listearticle",
            name:"ListeArticle",
            
            icon:<ArticleIcon className='sidebarIcon'/>
        },
        {
            path:"/typearticle",
            name:"typearticle",
            icon: <AssignmentIcon className='sidebarIcon'/>
            
        },
       
        {
            path:"/Projet",
            name:"Projet",
            icon:<RuleFolderIcon className='sidebarIcon'/>
        }
    ]
    return(
       <div>
            <nav >
            <Hidden mdDown implementation="css">
                <Drawer
                    variant="permanent"
                    open
                    anchor="left"
                    style={{width:isOpen?"240px":"68px"}} 

                    >
                <div  className="sidebar">
                <div className="top_section">
              
                    <h1 style={{display:isOpen?"block":"none"} } className="logo">AGSAM</h1>
                    <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            style={{display:isOpen?"none":"flex"} }
                            onClick={toggle} 
                            >
                            <MenuIcon fontSize="large"/>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            style={{display:isOpen?"flex":"none"} }
                            onClick={toggle} 
                            >
                            <ArrowBackIosNewIcon />
                        </IconButton>
                        
                        <div style={{marginLeft:isOpen?"30px":"-15px"}} className="bars"></div>
                    </div>
                <CssBaseline />
                <Divider color='#000' fontSize='3px'/>
    
                    {
                     menuItem.map((item,index)=>(
                        <NavLink to={item.path}
                         key={index} className="link"
                         disablePadding 
                         activeclassName="active">
                            <div className="icon sidebarIcon">{item.icon}</div>
                            <div style={{display:isOpen?"block":"none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                    }
                    
                </div>
            </Drawer> 
            </Hidden>
            <Drawer
                    variant="temporary"
                    open={isMobile}
                    anchor="left"
                    style={{width:"200px"}}
                    onClick={funcSetIsMobile}
                    >
                <div  className="sidebar">
                <div className="top_section">
              
                <h1 style={{display:"block"} } className="logo">AGSAM</h1>
                    <div style={{marginLeft:isOpen?"50px":"-35px"}} className="bars"></div>
                   
                </div>
                <CssBaseline />
                <Divider color='#000' fontSize='3px'/>
    
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
                    
            </div>
        </Drawer>
        </nav>
           
       </div>
    );
};
export default Sidebar;