const axios = require ('axios');

const users = async() => {
  try{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(res.data)
  }
  catch(err){
    console.log(err)
  }
}

users()

module.export = {users}