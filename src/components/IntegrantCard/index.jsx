import { AiFillLinkedin } from "react-icons/ai";
import { Container, Description } from "./styles";

export function IntegrantCard({ name, picture, qualification, participation, linkedin, ...rest }) {
  return (
    <Container {...rest}>
      <img src={picture} alt={`Foto do integrante ${name}`} />
      {name}
      <Description>
        <h2>{name}</h2>
        <p>
          <b>Qualificações:</b> 
          {qualification}
        </p>
        <p>
          <b>Participação: </b> 
          {participation}
        </p>
        <p>
          <b>Linkedin: </b> 
          <a href={linkedin}><AiFillLinkedin/></a>
        </p>
      </Description>
    </Container>
  )
}