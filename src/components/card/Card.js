import { StyledCard } from "./Card.styles";

export default function Card(props) {
  const {
    children,
    ...remainingProps
  } = props;

  return (
    <StyledCard className="card" {...remainingProps} >
      {children}
    </StyledCard>
  )
}
