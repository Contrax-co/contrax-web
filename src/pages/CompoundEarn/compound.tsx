import React, {useState, useEffect} from 'react';
import CompoundItem from './compoundItem';
import './compound.css';
import SideBar from './components/SideBar';
import LightModeToggle from './components/LightModeToggle';

function Compound() {
    const [pools, setPools] = useState([]);
    const[lightMode, setLightMode] = useState(true); 
   

    // fetch the json of the pools and push them into an array for mapping 
    useEffect(() => {
        const data = window.localStorage.getItem('lightMode');
        if(data != null){
            setLightMode(JSON.parse(data));
        }
       
        try{
            const {ethereum} = window; 
            if(ethereum) {
                fetch(`https://testing.contrax.finance/api/pools.json`)       //`http://localhost:3000/api/pools.json` or `https://testing.contrax.finance/api/pools.json` for when we want it done locally
                .then(response => response.json())
                .then(data => {
                setPools(data); 
                })
            }
        }
        catch (error){
            console.log(error);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('lightMode', JSON.stringify(lightMode));
    }, [lightMode]);


    const toggleLight = () => {
        setLightMode(!lightMode);
    }

    return (
        <div className={`page ${lightMode && "page--light"}`}>
            <div className="ac_page">
                <div className="sidebar">
                    <SideBar
                        lightMode = {lightMode === true}
                    />
                </div>
                
                <div className={`farms ${lightMode && "farms--light"}`}>
                    <div className={`farm_header ${lightMode && "farm_header--light"}`}>
                        <p>Farms</p> 
                        <LightModeToggle 
                            onClick={toggleLight} 
                            lightMode={lightMode}
                        />
                
                    </div>
                   
                    
                    <div className="pools_list">
                        {pools.map((pool:any) => (
                            <CompoundItem
                                key={pool.id} 
                                pool={pool}
                                lightMode={lightMode === true}
                            />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Compound;