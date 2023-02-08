const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let welcomeStudents = users.map(elem => `Hello ${elem.firstName}`)

console.log(welcomeStudents)


let fullStackResidents = users.filter( elem => elem.role.includes('Full Stack Resident'))

console.log(fullStackResidents)

let fullStackResidentsLastName = users.filter( elem => elem.role.includes('Full Stack Resident')).map(element => element.lastName)

console.log(fullStackResidentsLastName)