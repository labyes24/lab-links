/**
 * The volunteers info
 * @typedef (Object) volunteer
 * @property (string) name - volunteer's name.
 * @property (string) picture - volunteer's picture.
 * @property (string) qualification - volunteer's qualification.
 * @property (string) participation - volunteer's participation in projects.
 * @property (string) github - volunteer's github.
 * @property (string) linkedin - volunteer's linkedin.
 */

import graceImg from '../../public/volunteers/avatar_GK.jpg'
import caioImg from '../../public/volunteers/caio-avatar2.jpg'
import cristianImg from '../../public/volunteers/cristian_avatar.png'
import evandroImg from '../../public/volunteers/evandro-avatar-3.jpg'
import henricoImg from '../../public/volunteers/henrico-avatar.png'
import adrianoImg from '../../public/volunteers/adriano-avatar-4.jpg'
import thalytaImg from '../../public/volunteers/thalyta-avatar.png'
import villaImg from '../../public/volunteers/villa-avatar.jpg'
import ylderlanImg from '../../public/volunteers/ylderlan_avatar.png'

const volunteers = [
  {
    id: crypto.randomUUID(),
    name: 'Adriano Souza',
    picture: adrianoImg,
    qualification:
      'Organizado, ótimo em liderar desenvolvedores iniciantes devido a sua vasta experiência, encontra rapidamente soluções para problemas complexos, guiou cada passo do Lab Yes!',
    participation: 'Tech Lead',
    github: 'https://github.com/silvasouzaadriano',
    linkedin: 'https://www.linkedin.com/in/adriano-souza-9b1a1b11/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Caio Balduino',
    picture: caioImg,
    qualification:
      'Excelente comunicação, é pontual e trabalha muito bem em equipe.',
    participation: 'Web Designer e Dev Front End',
    github: 'https://github.com/Caiobaldur',
    linkedin: 'https://www.linkedin.com/in/caio-balduino/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Cristian Sbardelotto',
    picture: cristianImg,
    qualification:
      'Disciplinado como um ninja, com altas dosagens de Hard e Soft Skills.',
    participation: 'Dev Front End',
    github: 'https://github.com/cristian-sbardelotto',
    linkedin: 'https://www.linkedin.com/in/cristian-k-sbardelotto/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Evandro Damaso',
    picture: evandroImg,
    qualification:
      'Econômico nas palavras, abundante em eficiência tech e pessoal.',
    participation: 'Squad Lead e Dev Front End',
    github: 'https://github.com/dam450',
    linkedin: 'https://www.linkedin.com/in/evandro-damaso/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Grace Kelly',
    picture: graceImg,
    qualification:
      'Ótima em detectar melhorias do ponto de vista do usuário, prevenir bugs e reconhecer características produtivas e positivas nas pessoas.',
    participation: 'PM | PO | QA Manager | QA Tester',
    github: 'https://github.com/gksouza',
    linkedin: 'https://www.linkedin.com/in/gkos22/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Francisco Ylderlan',
    picture: ylderlanImg,
    qualification: 'Fortíssimos hard skills e organização de tarefas.',
    participation: 'Squad Lead e Dev Front End',
    github: 'https://github.com/FranciscoYlderlan',
    linkedin: 'https://www.linkedin.com/in/franciscoylderlanoliveira/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Henrico Angolera',
    picture: henricoImg,
    qualification:
      'Gentileza é sua marca pessoal, e sua assinatura digital é entrega de ótimos resultados.',
    participation: 'QA Tester e Dev Front End',
    github: 'https://github.com/HenricoAngolera',
    linkedin: 'https://www.linkedin.com/in/henrico-angolera/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Mateus Villa Nova',
    picture: villaImg,
    qualification:
      'Ávido por codar e encontrar soluções rápidas para demandas tecnológicas.',
    participation: 'QA Tester e Dev Front End',
    github: 'https://github.com/Villa-Nova',
    linkedin: 'https://www.linkedin.com/in/mateusvillanova/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Thalyta Rangel',
    picture: thalytaImg,
    qualification:
      'Assertiva e observadora. Os bugs tremem diante de sua competência técnica.',
    participation: 'Dev Front End',
    github: 'https://github.com/ThalytaRangel',
    linkedin: 'https://www.linkedin.com/in/thalyta-rangel-341b44161/',
  },
]

/**
 * Retrieves the volunteers.
 * @return {volunteers} returns the volunteers info.
 */

export function useVolunteers() {
  return volunteers
}
