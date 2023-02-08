const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


const studentsHavePassed = students.filter(elem => elem.isPassed == true)

console.log(studentsHavePassed)

studentsHavePassed.forEach(element => 
  // console.log(element)
  console.log(`Good Job ${element.name} you passed the course in ${element.course}`)
)

