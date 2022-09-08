import React, {useState} from 'react';
import logo from "../../../images/logo.png";
import logo2 from "../../../images/logo-4x.png";
import './SideBar.css';
import SideBarItem from './SideBarItem';
import { GiFarmTractor } from 'react-icons/gi';
import {HiDocumentText} from 'react-icons/hi';
import {AiOutlineExport} from 'react-icons/ai';

function SideBar({lightMode}:any) {
    const[menuItem, setMenuItem] = useState("Farms"); 

  return (
    <div className={`sidebar_bg ${lightMode && "sidebar_bg--light"}`}>
        <img className="contrax_logo" alt="contrax-logo" src={lightMode ? logo2: logo} />

        <div className="side_items">
            <SideBarItem 
                title="Farms" 
                icon={<GiFarmTractor/>} 
                onClick={(e:any) => setMenuItem("Farms")}
                active={menuItem ==="Farms"}
                lightMode={lightMode}
            />
            <SideBarItem 
                title="Docs"
                onClick = {() => window.open("https://contrax.gitbook.io/contrax-docs/", '_blank')}
                icon={<HiDocumentText/>} 
                icon2={<AiOutlineExport/>}
                active={menuItem ==="Docs"}
                lightMode={lightMode}
            />
            
        </div>

    </div>
  )
}

export default SideBar