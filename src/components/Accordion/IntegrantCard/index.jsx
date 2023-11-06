import { AiFillLinkedin } from "react-icons/ai";
import { Container, ProfileHeader, Description } from "./styles";

export function IntegrantCard({ 
  name, 
  picture, 
  qualification, 
  participation, 
  linkedin, 
  onClickItem,
  isActiveSection, 
  ...rest 
}) {
  return (
    <Container {...rest}>
      <ProfileHeader onClick={onClickItem}>
        <div className="member">
          <img src={picture} alt={`Foto do integrante ${name}`} />
          <p>{name}</p>
        </div>
        <a>
          {isActiveSection ? "-" : "+"}
        </a>
      </ProfileHeader>
      {isActiveSection && 
        <Description>
          <h2>{name}</h2>
          <p>
            <b>Qualificações: </b> 
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
        </Description>}
    </Container>
  )
}