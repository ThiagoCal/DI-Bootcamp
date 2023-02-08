const users = { user1: 18273, user2: 92833, user3: 90315 }

console.log(Object.entries(users))

let newArray3 = Object.entries(users).map(elem => 
  [elem[0], elem[1] * 2]
)

console.log(newArray3)


let array = []
for(let user in users){
  array.push([`${user}`, users[user]])
}

let newArray = []
for(let user in users){
  let usernew = users[user] * 2
  newArray.push([`${user}`, usernew])
}

console.log(array)
console.log(newArray)



// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]