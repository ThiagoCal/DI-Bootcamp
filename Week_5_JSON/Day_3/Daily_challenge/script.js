function makeAllCaps(array1){
  let mPromise = new Promise((resolve, reject)=>{
    array1.forEach(element => {
      if(typeof element === 'string'){
        console.log(element)
        let newArray = array1.map(element => element.toUpperCase())
        console.log(newArray)
        resolve(newArray)
      } else {
        reject("There is a no string element inside the array")
      }
    })
  })
  return mPromise
}

function sortWords(newArr) {
  return new Promise(function (resolve, reject) {
      if (newArr.length > 4) {
          resolve(newArr.sort())
      } else {
          reject('ERROR, array length <= 4')
      }
  })
}

makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) 
  .catch(error => console.log(error))

