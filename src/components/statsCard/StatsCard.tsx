import { StyledDesc } from './StatsCard.styles';

export default function StatsCard(props:any) {
    const {cardIcon, cardTitle, cardValue} = props;
    return (
        <div>

            <div className="card">
                <div className="card-body">
                    <i className={cardIcon}></i> <StyledDesc varient={'dark'} className="ms-2"> {cardTitle} </StyledDesc> <StyledDesc className="float-end"> {cardValue} </StyledDesc> 
                </div>
            </div>

        </div>
    )
}
