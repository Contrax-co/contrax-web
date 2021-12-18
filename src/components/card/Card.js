import { StyledCard, StyledCardBody } from "./Card.styles";

export const Card = function(props) {
  const {
    children,
    ...remainingProps
  } = props;

  return (
    <StyledCard className="card" {...remainingProps} >
      <StyledCardBody>
        {children}
      </StyledCardBody>
    </StyledCard>
  )
}

export default Card;
