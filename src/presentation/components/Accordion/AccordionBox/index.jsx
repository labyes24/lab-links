import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Container, Logo, Members, Social } from "./styles";
import { IntegrantCard } from "../IntegrantCard";

import logo from "../../../assets/logo.svg";

import { useVolunteers } from "../../../../data/VolunteersData";

export function AccordionBox() {
  const [activeIndex, setActiveIndex] = useState(null)

  function handleClick(id) {
    setActiveIndex(() => (activeIndex === id ? null : id))
  }

  const members = useVolunteers();

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do LabYes! Consiste em duas letras: LY escrito em branco, seguido pela palavra team escrita menor ao lado." />
        <p>Lapidando o Dev Jr para o mercado real</p>
      </Logo>
      <Members>
        { members && members.map((integrant, index) => (
          <IntegrantCard 
            key={integrant.id} 
            name={integrant.name} 
            picture={integrant.picture} 
            qualification={integrant.qualification} 
            participation={integrant.participation} 
            linkedin={integrant.linkedin} 
            github={integrant.github}
            onClickItem={() => handleClick(index)}
            isActiveSection={index === activeIndex}
          />
        ))}
      </Members>
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