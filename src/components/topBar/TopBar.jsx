import React from "react";
import"./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from "@mui/material";


export default function TopBar(){
    return(
        <div className="topBar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">AGSAM</div>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <NotificationsNoneIcon fontSize="large" /> 
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIcons">
                        <SettingsIcon fontSize="large" /> 
                    </div>
                    <Avatar className="topAvatar">P</Avatar>
                </div>
            </div>
            
        </div>
    )
}