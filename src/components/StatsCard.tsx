import React from 'react'

export default function StatsCard(props:any) {
    const {cardIcon, cardTitle, cardValue} = props;
    return (
        <div>

            <div className="card">
                <div className="card-body">
                    <i className={cardIcon}></i> <span className="ms-2"> {cardTitle} </span> <span className="float-end"> {cardValue} </span> 
                </div>
            </div>

        </div>
    )
}
