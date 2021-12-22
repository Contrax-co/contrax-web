import Card from '../card/Card';
import { StyledBtnText, StyledDesc } from './StatsCard.styles';
import * as colors from '../../theme/colors';

export default function StatsCard(props: any) {
  const { cardIcon, cardTitle, cardValue } = props;
  return (
    <Card bodyClass='p-2' className='p-1'>
      <i style={{color:colors.primary, border: '1px solid', padding: 7, borderRadius: '50%', background: colors.accentLight}} className={cardIcon}></i> <StyledDesc  className="ms-2"> {cardTitle} </StyledDesc> <StyledBtnText className="float-end mt-1"> {cardValue} </StyledBtnText>
    </Card>
  )
}
