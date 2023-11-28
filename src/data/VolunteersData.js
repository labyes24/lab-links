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
    name: 'test 1',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s',
    qualification: 'muito bom dev React',
    participation: 'Desenvolvedor front-end/designer/QA',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: crypto.randomUUID(),
    name: 'test 2',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s',
    qualification: 'muito bom dev React',
    participation: 'Desenvolvedor front-end / designer / QA',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: crypto.randomUUID(),
    name: 'test 3',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s',
    qualification: 'muito bom dev React',
    participation: 'Desenvolvedor front-end/designer/QA',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: crypto.randomUUID(),
    name: 'test 4',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s',
    qualification: 'muito bom dev React',
    participation: 'Desenvolvedor front-end/designer/QA',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: crypto.randomUUID(),
    name: 'test 5',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_3N837SZ4kX4PYCXMgLUwlFippWbDR_Mach-2IU&s',
    qualification: 'muito bom dev React',
    participation: 'Desenvolvedor front-end/designer/QA',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
]

/**
 * Retrieves the volunteers.
 * @return {volunteers} returns the volunteers info.
 */

export function useVolunteers() {
  return volunteers
}
