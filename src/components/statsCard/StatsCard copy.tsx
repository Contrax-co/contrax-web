import Card from '../card/Card';
import { StyledDesc } from './StatsCard.styles';
import * as colors from '../../theme/colors';

export default function StatsCard(props: any) {
  const { cardIcon, cardTitle, cardValue } = props;
  return (
    <Card>
      <i style={{color:colors.primary}} className={cardIcon}></i> <StyledDesc  className="ms-2"> {cardTitle} </StyledDesc> <StyledDesc className="float-end"> {cardValue} </StyledDesc>
    </Card>
  )
}
