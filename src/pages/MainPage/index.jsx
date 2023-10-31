import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Container, Logo, Integrants, Social } from "./styles";
import { IntegrantCard } from "../../components/IntegrantCard";

import logo from "../../assets/logo.svg";

export function MainPage() {
  return (
    <Container>
      <Logo>
        <p>Team</p>
        <img src={logo} alt="Logo do LabYes! Consiste em uma lâmpada amarela acesa e labyes! escrito em amerelo." />
      </Logo>
      <Integrants>
        <IntegrantCard name="fulano de tal" picture={logo} href="https://linkedin.com" target="_blank" />
        <IntegrantCard name="fulano de tal" picture={logo} href="https://linkedin.com" target="_blank" />
        <IntegrantCard name="fulano de tal" picture={logo} href="https://linkedin.com" target="_blank" />
        <IntegrantCard name="fulano de tal" picture={logo} href="https://linkedin.com" target="_blank" />
      </Integrants>
      <Social>
        <a href="https://github.com/lab-yes" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/company/lab-yes/" target="_blank">
          <AiFillLinkedin/>
        </a>
      </Social>
    </Container>
  )
}