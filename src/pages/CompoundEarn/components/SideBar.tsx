import React, {useState} from 'react';
import logo from "../../../images/logo.png";
import './SideBar.css';
import SideBarItem from './SideBarItem';
import { GiFarmTractor } from 'react-icons/gi';
import {HiDocumentText} from 'react-icons/hi';
import {AiOutlineExport} from 'react-icons/ai';

function SideBar() {
    const[menuItem, setMenuItem] = useState("Farms"); 

  return (
    <div className="sidebar_bg">
        <img className="contrax_logo" alt="contrax-logo" src={logo} />

        <div className="side_items">
            <SideBarItem 
                title="Farms" 
                icon={<GiFarmTractor/>} 
                onClick={(e:any) => setMenuItem("Farms")}
                active={menuItem ==="Farms"}
            />
            <SideBarItem 
                title="Docs"
                onClick = {() => window.open("https://contrax.gitbook.io/contrax-docs/", '_blank')}
                icon={<HiDocumentText/>} 
                icon2={<AiOutlineExport/>}
                active={menuItem ==="Docs"}
            />
            
        </div>

    </div>
  )
}

export default SideBar