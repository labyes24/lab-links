import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Container, Logo, Integrants, Social } from "./styles";
import { IntegrantCard } from "../../components/IntegrantCard";

import logo from "../../assets/logo.svg";

export function MainPage() {
  const integrants = [
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
  return (
    <Container>
      <Logo>
        <p>Team</p>
        <img src={logo} alt="Logo do LabYes! Consiste em uma lâmpada amarela acesa e LabYes! escrito em amerelo." />
      </Logo>
      <Integrants>
        { integrants && integrants.map((integrant) => (
          <IntegrantCard name={integrant.name} picture={integrant.picture} qualification={integrant.qualification} participation={integrant.participation}/>
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