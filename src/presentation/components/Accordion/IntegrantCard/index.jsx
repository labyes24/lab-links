import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Container, ProfileHeader, Description } from './styles'

export function IntegrantCard({
  name,
  picture,
  qualification,
  participation,
  linkedin,
  github,
  onClickItem,
  isActiveSection,
  ...rest
}) {
  return (
    <Container {...rest} $isActiveSection={isActiveSection}>
      <ProfileHeader onClick={onClickItem}>
        <div className="member">
          <img src={picture} alt={`Foto do integrante ${name}`} />
          <p>{name}</p>
        </div>
        <a>{isActiveSection ? '-' : '+'}</a>
      </ProfileHeader>
      {isActiveSection && (
        <Description>
          <div className="social">
            <a href={linkedin} target="_blank" rel="noreferrer">
              <AiFillLinkedin />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
          </div>
          <p>
            <b>Qualificações: </b>
            {qualification}
          </p>
          <p>
            <b>Participação: </b>
            {participation}
          </p>
        </Description>
      )}
    </Container>
  )
}
