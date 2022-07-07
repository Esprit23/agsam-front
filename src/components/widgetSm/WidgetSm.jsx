import React from 'react'
import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar } from "@mui/material";

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New join Menbres</span>
      <ul className="widgetListe">
        <li className="widgetListeItem">
        <Avatar className="topAvatar">P</Avatar>
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Esprit franck</span>
                <span className="widgetSmUserRole">Admin</span>
            </div>
            <button className='widgetSmButton'>
                <VisibilityIcon />
                Voir
            </button>
        </li>
        <li className="widgetListeItem">
        <Avatar className="topAvatar">P</Avatar>
            <div className="widgetSmUser">
                <span className="widgetSmUsername">andriambelohainarivo</span>
                <span className="widgetSmUserRole">Admin</span>
            </div>
            <button className='widgetSmButton'>
                <VisibilityIcon />
                Voir
            </button>
        </li>
        <li className="widgetListeItem">
        <Avatar className="topAvatar">P</Avatar>
            <div className="widgetSmUser">
                <span className="widgetSmUsername">tianjanahary</span>
                <span className="widgetSmUserRole">Admin</span>
            </div>
            <button className='widgetSmButton'>
                <VisibilityIcon className='widgetSmIcon' />
                Voir
            </button>
        </li>
        <li className="widgetListeItem">
        <Avatar className="topAvatar">P</Avatar>
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Razanazatovo</span>
                <span className="widgetSmUserRole">Admin</span>
            </div>
            <button className='widgetSmButton'>
                <VisibilityIcon />
                Voir
            </button>
        </li>
      </ul>
    </div>
  )
}
