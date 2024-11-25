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

const volunteers = [
  {
    id: crypto.randomUUID(),
    name: 'Adriano Souza',
    picture: '/volunteers/adriano-avatar-4.jpg',
    qualification:
      'Organizado, ótimo em liderar desenvolvedores iniciantes devido a sua vasta experiência, encontra rapidamente soluções para problemas complexos, guiou cada passo do Lab Yes!',
    participation: 'Tech Lead',
    github: 'https://github.com/silvasouzaadriano',
    linkedin: 'https://www.linkedin.com/in/adriano-souza-9b1a1b11/',
    cardBlured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'CB',
    picture: '/volunteers/caio-avatar-blured.jpeg',
    qualification:
      'Excelente comunicação, é pontual e trabalha muito bem em equipe.',
    participation: 'Web Designer e Dev Front End',
    github: '',
    linkedin: '',
    cardBlured: true,
  },
  {
    id: crypto.randomUUID(),
    name: 'Cristian Sbardelotto',
    picture: '/volunteers/cristian_avatar.png',
    qualification:
      'Disciplinado como um ninja, com altas dosagens de Hard e Soft Skills.',
    participation: 'Dev Front End',
    github: 'https://github.com/cristian-sbardelotto',
    linkedin: 'https://www.linkedin.com/in/cristian-k-sbardelotto/',
    cardBlured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Daiane Farias',
    picture: '/volunteers/daiane_avatar.png',
    qualification:
      'Demandas entregues com excelência e algumas de suas características inatas são: responsabilidade, comprometimento, Lifelong Learning e companheirismo no trabalho em equipe.',
    participation: 'Dev Front End',
    github: 'https://github.com/daiaanebarbosaf',
    linkedin: 'www.linkedin.com/in/daiaanebarbosaf',
    cardBlured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Evandro Damaso',
    picture: '/volunteers/evandro-avatar-3.jpg',
    qualification:
      'Econômico nas palavras, abundante em eficiência tech e pessoal.',
    participation: 'Squad Lead, Dev Front End e Gestor de Projetos',
    github: 'https://github.com/dam450',
    linkedin: 'https://www.linkedin.com/in/evandro-damaso/',
    cardBlured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Flávia Freitas',
    picture: '/volunteers/flavia-avatar.png',
    qualification:
      'Habilidade em encontrar soluções criativas, práticas e produtivas, gerando resultados positivos.',
    participation: 'Design UI/UX',
    linkedin: 'https://www.linkedin.com/in/flaviaflfreitas/',
    cardBlured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Francisco Ylderlan',
    picture: '/volunteers/ylderlan_avatar.png',
    qualification: 'Fortíssimos hard skills e organização de tarefas.',
    participation: 'Squad Lead e Dev Front End',
    github: 'https://github.com/FranciscoYlderlan',
    linkedin: 'https://www.linkedin.com/in/franciscoylderlanoliveira/',
    cardBlured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Grace Kelly',
    picture: '/volunteers/avatar_GK.jpg',
    qualification:
      'Ótima em detectar melhorias do ponto de vista do usuário, prevenir bugs e reconhecer características produtivas e positivas nas pessoas.',
    participation: 'PM | PO | QA Manager | QA Tester',
    github: 'https://github.com/gksouza',
    linkedin: 'https://www.linkedin.com/in/gkos22/',
    cardBlured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Henrico Angolera',
    picture: '/volunteers/henrico-avatar.png',
    qualification:
      'Gentileza é sua marca pessoal, e sua assinatura digital é entrega de ótimos resultados.',
    participation: 'QA Tester e Dev Front End',
    github: 'https://github.com/HenricoAngolera',
    linkedin: 'https://www.linkedin.com/in/henrico-angolera/',
    cardBlured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Mateus Villa Nova',
    picture: '/volunteers/villa-avatar.jpg',
    qualification:
      'Ávido por codar e encontrar soluções rápidas para demandas tecnológicas.',
    participation: 'QA Tester e Dev Front End',
    github: 'https://github.com/Villa-Nova',
    linkedin: 'https://www.linkedin.com/in/mateusvillanova/',
    cardBlured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Matheus Hofstede',
    picture: '/volunteers/hofs-avatar.png',
    qualification:
      'Pontualidade é uma entre tantas características fortes da sua persona tech. Seu conhecimento técnico é exponencial e ímpar, com altíssimo nível de liderança e motivador nato. Mentor em AWS, resoluções e sugestões em refatoração de componentes e repositórios.',
    participation: 'Dev Back End',
    github: 'https://github.com/hofstede-matheus/',
    linkedin: 'https://www.linkedin.com/in/hofstede-matheus/',
    cardBlured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Thalyta Rangel',
    picture: '/volunteers/thalyta-avatar.png',
    qualification:
      'Assertiva e observadora. Os bugs tremem diante de sua competência técnica.',
    participation: 'Dev Front End e Gestora de Projetos',
    github: 'https://github.com/ThalytaRangel',
    linkedin: 'https://www.linkedin.com/in/thalyta-rangel-341b44161/',
    cardBlured: false,
  },
]

/**
 * Retrieves the volunteers.
 * @return {volunteers} returns the volunteers info.
 */

export function useVolunteers() {
  return volunteers
}
