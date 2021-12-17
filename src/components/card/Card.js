import { StyledCard, StyledCardBody } from "./Card.styles";

export default function Card(props) {
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
