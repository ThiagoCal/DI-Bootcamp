// Part I
// What does the following code return/print?
// const facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// const {numPlanets, yearNeptuneDiscovered} = facts;

// will return 8 and 1846

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?


// Part II
// What does the following code return/print?
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let {numPlanets, ...discoveryYears} = planetFacts;
// // will not return 8 and will return the other information
// console.log(discoveryYears); // 


// function getDetails({name, house, goodstudent}) {
// 	console.log(name, house, goodstudent)
// }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})



// function getMoreDetails({name, house, friend : {friendName, age}}) {
// 	console.log(name, house, friendName, age)
// }

getMoreDetails(
			{name: 'Hermione Granger', 
				house: 'Gryfindor', 
				friend :  {
					friendName : 'Harry Potter', 
          age : 20
				}
			})

const elonPerson = {
  first: 'Elon',
  last: 'Musk',
  housesLocation : ["new york", "paris"],
  twitter: '@elonmusk',
  company: 'Space X',
  houses : {
    amount: 2,
    value : "5Million"
  }
}

function getElonMuskDetails({first: firstname, last: lastname, housesLocation: [locationOne, locationTwo], houses: {value: valueHouses}}){
console.log(firstname, lastname)
console.log(locationOne, locationTwo, valueHouses)

}

getElonMuskDetails(elonPerson)

// Display in the body of the document, the name, email and phone of every employee. Use a loop and object destructuring
const employees = [
	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
]

function displayEmployee(){
  employees.forEach(({name, email, phone}) => {
    let paragraph = document.createElement("p")
    let text = document.createTextNode( `Name: ${name}, Email: ${email}, Phone: ${phone}`)
    paragraph.appendChild(text)
    let division = document.querySelector("#container")
    division.appendChild(paragraph)
  });
}

displayEmployee()

// // Exercise 2 : USE OBJECT DESTRUCTURING
// const studentsFootball = [
//  {name: 'Rich', score: 33}, 
//  {name: 'Peter', score: 55}
// ];

// let students = studentsFootball.map(({name, score, isAboveAverage}) => {
//   score > 50 ? isAboveAverage = true : isAboveAverage = false
//   return {name, score, isAboveAverage}
// })
// console.log(students)
// Using MAP,  create a new array of objects, containing the name, score and isAboveAverage if the students has a score bigger that 50, the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator
// Result
// const studentsNew = [
//     {name: 'Rich', score: 33, isAboveAverage : false}, 
//     {name: 'Peter', score: 55, isAboveAverage : true}
// ];


// Exercise 1
// Part I

class TV {
  constructor (brand,channel=1,volume=50) {
      this.brandTV = brand;
      this.channelTV = channel;
      this.volumeTV = volume;
  }

  changeVolume(key) {
    if(key === "up"){
      this.volumeTV ++
      if(this.volumeTV == 100){
        this.volumeTV == 100
      }
    }else if(key === "down"){
      this.volumeTV --
      if(this.volumeTV == 0){
        this.volumeTV == 0
      }
    }
  }

  setChannel(channel){
    let current = this.channelTV
    if (channel > 50 || channel < 1){
      this.channelTV = current
    }else{
      this.channelTV = channel
    }
  }

  reset(){
    this.channelTV = 1;
    this.volumeTV = 50;
  }

  status(){
    return console.log(`${this.brandTV} at channel ${this.channelTV}, volume ${this.volumeTV}`)
  }

};

const lgTv = new TV("LG")

lgTv.changeVolume("up")
lgTv.changeVolume("up")
lgTv.changeVolume("up")
lgTv.changeVolume("up")
lgTv.changeVolume("up")
lgTv.changeVolume("down")

lgTv.setChannel(10)
lgTv.setChannel(-1)
lgTv.reset()
// lgTv.setChannel(-1)
// console.log(lgTv)

lgTv.status()

class smartTv extends TV{
  constructor(smartBrand, smartChannel, smartVolume, hasNetFlix = true){
    super(smartBrand,smartChannel,smartVolume)
    this.hasNetFlix = hasNetFlix;
  }
  
  changeVolume(){
    this.volumeTV += 10
  }
}

const samsungTV = new smartTv("Samgung", 20, 60, false)

samsungTV.changeVolume()

console.log(samsungTV)
// Create a TV function constructor with 3 parameters : brand, channel and volume Channel should be 1 by default. Volume should be 50 by default.
// Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// Create an object for the LG TV
// Call the inscrease method, and check if the volume changed
// Part II
// Create a subclass for Smart TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default
// Part III: Modify the TV class
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// Part III: Modify the TV class
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".