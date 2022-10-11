import React from 'react';
import logo from "../../images/logo.png";
import logo2 from "../../images/logo-4x.png";
import './SideBar.css';
import SideBarItem from './SideBarItem';
import { GiFarmTractor, GiToken } from 'react-icons/gi';
import {HiDocumentText} from 'react-icons/hi';
import {AiOutlineExport} from 'react-icons/ai';
import {MdSpaceDashboard} from 'react-icons/md';
import {FaExchangeAlt} from 'react-icons/fa';
import LightModeToggle from '../../pages/CompoundEarn/components/LightModeToggle';

function SideBar({lightMode, menuItem, setMenuItem, ...props}:any) {

  return (
    <div className={`sidebar_bg ${lightMode && "sidebar_bg--light"}`}>
        <img className="contrax_logo" alt="contrax-logo" src={lightMode ? logo2: logo} />

        <div className="side_items">
            <SideBarItem
                title="Dashboard"
                icon={<MdSpaceDashboard />}
                onClick={() => setMenuItem("Dashboard")}
                active={menuItem ==="Dashboard"}
                lightMode={lightMode}
            />

            <SideBarItem 
                title="Farms" 
                icon={<GiFarmTractor/>} 
                onClick={() => setMenuItem("Farms")}
                active={menuItem ==="Farms"}
                lightMode={lightMode}
            />


            <SideBarItem
                title="Exchange"
                icon={<FaExchangeAlt />}
                onClick={() => setMenuItem("Exchange")}
                active={menuItem ==="Exchange"}
                lightMode={lightMode}
            />

            <SideBarItem
                title="Create token"
                icon={<GiToken />}
                onClick={() => setMenuItem("Create token")}
                active={menuItem ==="Create token"}
                lightMode={lightMode}
            />

            <SideBarItem
                title="Create pool"
                icon={<GiToken />}
                onClick={() => setMenuItem("Create pool")}
                active={menuItem ==="Create pool"}
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

        <LightModeToggle
            onClick={props.onClick} 
            lightMode={lightMode}
        />
 
    </div>
  )
}

export default SideBar