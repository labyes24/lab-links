import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Container, Logo, Integrants, Social } from "./styles";
import { IntegrantCard } from "../../components/IntegrantCard";

import logo from "../../assets/logo.svg";

export function MainPage() {
  const integrants = [
    {
      name: "test 1",
      picture: logo
    },
    {
      name: "test 2",
      picture: logo
    },
    {
      name: "test 3",
      picture: logo
    },
    {
      name: "test 4",
      picture: logo
    },
  ];
  return (
    <Container>
      <Logo>
        <p>Team</p>
        <img src={logo} alt="Logo do LabYes! Consiste em uma lâmpada amarela acesa e labyes! escrito em amerelo." />
      </Logo>
      <Integrants>
        { integrants && integrants.map((integrant) => (
          <IntegrantCard name={integrant.name} picture={integrant.picture} />
        ))}
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