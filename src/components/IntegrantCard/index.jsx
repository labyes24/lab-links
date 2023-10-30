import { Container } from "./styles";

export function IntegrantCard({ name, picture, ...rest }) {
  return (
    <Container {...rest}>
      <img src={picture} alt={`Foto do integrante ${name}`} />
      {name}
    </Container>
  )
}