import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Container, Logo, Members, Social } from "./styles";
import { IntegrantCard } from "../IntegrantCard";

import logo from "../../../assets/logo.svg";

const members = [
  {
    name: "test 1",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s",
    qualification: "muito bom dev React",
    participation: "Desenvolvedor front-end/designer/QA" ,
    linkedin: "https://linkedin.com"
  },
  {
    name: "test 2",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s",
    qualification: "muito bom dev React",
    participation: "Desenvolvedor front-end/designer/QA",
    linkedin: "https://linkedin.com"
  },
  {
    name: "test 3",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s",
    qualification: "muito bom dev React",
    participation: "Desenvolvedor front-end/designer/QA",
    linkedin: "https://linkedin.com"
  },
  {
    name: "test 4",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s",
    qualification: "muito bom dev React",
    participation: "Desenvolvedor front-end/designer/QA",
    linkedin: "https://linkedin.com" 
  },
  {
    name: "test 5",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s",
    qualification: "muito bom dev React",
    participation: "Desenvolvedor front-end/designer/QA",
    linkedin: "https://linkedin.com" 
  },
  {
    name: "test 6",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s",
    qualification: "muito bom dev React",
    participation: "Desenvolvedor front-end/designer/QA",
    linkedin: "https://linkedin.com" 
  },
  {
    name: "test 7",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s",
    qualification: "muito bom dev React",
    participation: "Desenvolvedor front-end/designer/QA",
    linkedin: "https://linkedin.com"
  },
  {
    name: "test 8",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s",
    qualification: "muito bom dev React",
    participation: "Desenvolvedor front-end/designer/QA" ,
    linkedin: "https://linkedin.com"
  }
];

export function AccordionBox() {
  const [activeIndex, setActiveIndex] = useState(null)

  function handleClick(id) {
    setActiveIndex(() => (activeIndex === id ? null : id))
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do LabYes! Consiste em uma lâmpada amarela acesa e LabYes! escrito em amerelo." />
        <p>Lapidando o Dev Jr para o mercado real</p>
      </Logo>
      <Members>
        { members && members.map((integrant, index) => (
          <IntegrantCard 
            key={index} 
            name={integrant.name} 
            picture={integrant.picture} 
            qualification={integrant.qualification} 
            participation={integrant.participation} 
            linkedin={integrant.linkedin} 
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