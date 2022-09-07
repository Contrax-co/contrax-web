import React from 'react';
import './SideBarItem.css';

function SideBarItem({ title, icon, icon2, active, ...props }: any) {
  return (
    <div
      className={`sideitems ${active && 'sideitems--selected'}`}
      onClick={props.onClick}
    >
      <div className="icon">{icon}</div>
      <div className="sidebar_title">{title}</div>
      <div className="icon2">{icon2}</div>
    </div>
  );
}

export default SideBarItem;
