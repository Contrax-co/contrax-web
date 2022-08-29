import React, {useState, useEffect} from 'react';
import Navigationbar from '../../components/Navigationbar/Navigationbar';
import BottomBar from '../../components/bottomBar/BottomBar';
import CompoundItem from './compoundItem';
import './compound.css';

function Compound() {
    const [pools, setPools] = useState([]);

    // fetch the json of the pools and push them into an array for mapping 
    useEffect(() => {
        try{
        const {ethereum} = window; 
        if(ethereum) {
            fetch(`http://localhost:3000/api/pools.json`)
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

    return (
        <div>
            <Navigationbar />
                <div className="pools_list">
                    {pools.map((pool:any) => (
                        <CompoundItem key={pool.id} pool={pool}/>
                    ))}
                </div>
            <BottomBar />
        </div>
    )
}

export default Compound;