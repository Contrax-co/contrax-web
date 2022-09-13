import React from 'react';
import './SideBarItem.css';

function SideBarItem({title, icon, icon2, active, lightMode, ...props}:any) {
  return (
    <div className={`sideitems ${lightMode && "sideitems--light"} ${active && "sideitems--selected"} ${active && lightMode && "sideitems--selected--light"}`} onClick = {props.onClick}>
        <div className={`icon ${lightMode && "icon--light"}`}>{icon}</div>
        <div className="sidebar_title">{title}</div>
        <div className={`icon2 ${lightMode && "icon2--light"}`}>{icon2}</div>
    </div> 
   
  )
}

export default SideBarItem