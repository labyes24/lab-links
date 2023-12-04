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
    picture: 'https://github.com/silvasouzaadriano.png',
    qualification: '',
    participation: 'Tech Lead',
    github: 'https://github.com/silvasouzaadriano',
    linkedin: 'https://www.linkedin.com/in/adriano-souza-9b1a1b11/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Grace Kelly',
    picture: 'https://github.com/gksouza.png',
    qualification: '',
    participation: 'PM | PO | QA Manager | QA Tester',
    github: 'https://github.com/gksouza',
    linkedin: 'https://www.linkedin.com/in/gkos22/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Caio Balduino',
    picture: 'https://github.com/Caiobaldur.png',
    qualification: '',
    participation: 'Web Designer e Dev Front End',
    github: 'https://github.com/Caiobaldur',
    linkedin: 'https://www.linkedin.com/in/caio-balduino/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Cristian Sbardelotto',
    picture: 'https://github.com/cristian-sbardelotto.png',
    qualification: '',
    participation: 'Dev FrontEnd',
    github: 'https://github.com/cristian-sbardelotto',
    linkedin: 'https://www.linkedin.com/in/cristian-k-sbardelotto/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Evandro Damaso',
    picture: 'https://github.com/dam450.png',
    qualification: '',
    participation: 'Squad Lead e Dev Front End',
    github: 'https://github.com/dam450',
    linkedin: 'https://www.linkedin.com/in/evandro-damaso/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Francisco Ylderlan',
    picture: 'https://github.com/FranciscoYlderlan.png',
    qualification: '',
    participation: 'Squad Lead e Dev Front End',
    github: 'https://github.com/FranciscoYlderlan',
    linkedin: 'https://www.linkedin.com/in/franciscoylderlanoliveira/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Mateus Villa Nova',
    picture: 'https://github.com/Villa-Nova.png',
    qualification: '',
    participation: 'QA Tester e Dev Front End',
    github: 'https://github.com/Villa-Nova',
    linkedin: 'https://www.linkedin.com/in/mateusvillanova/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Thalyta Rangel',
    picture: 'https://github.com/ThalytaRangel.png',
    qualification: '',
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
