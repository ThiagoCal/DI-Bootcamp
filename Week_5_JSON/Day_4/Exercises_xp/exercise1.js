async function getStarships(){
  const response = await fetch("https://www.swapi.tech/api/starships/9/")
  data = await response.json()
  return console.log(data.result)
}

getStarships()

function resolveAfter2Seconds() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('resolved');
      }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');//first will console log 'calling'
  let result = await resolveAfter2Seconds();
  console.log(result);//it will console.log resolved after 2secs
}

asyncCall();