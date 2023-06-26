const people = [
    {title: 'Mr', firstName: 'John', middleNames: 'G', lastName: 'Smith', job: 'Software Developer', rating: 8, yearsOfExperience: 3},
    {title: 'Mrs', firstName: 'Jane', middleNames: 'T', lastName: 'Blogs', job: 'Project Manager', rating: 7, yearsOfExperience: 7},
    {title: 'Miss', firstName: 'Jill', middleNames: 'A', lastName: 'Roads', job: 'Finance Manager', rating: 9, yearsOfExperience: 1},
    {title: 'Mr', firstName: 'Jerry', middleNames: 'P', lastName: 'Green', job: 'CEO', rating: 4, yearsOfExperience: 5}
]
export const api = () => {
    return () => {return people};
}