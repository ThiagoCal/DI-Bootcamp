const knex = require('knex');
const dotenv = require('dotenv')

dotenv.config();

const db = knex({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
  }
});


db('products')
.select('id','name','price')
.then(rows =>{
  console.log(rows)
})
.catch(err =>{
  console.log(err)
})

module.exports = {db};

// db.select('*').from('country').orderBy('last_update', 'desc').then(rows =>{
//   console.log(rows)
// })
// .catch(err =>{
//   console.log(err)
// })

//insert
// db('country')
// .insert([
//   {
//     country: 'Thiago1'
//   },
//   {
//     country: 'Hanna2'
//   }
// ])
// .then(res => {
//   console.log(res)
// })
// .catch(err =>{
//   console.log(err)
// })
//update
// db('country')
// .update({country:'Developers Institute'})
// .where({country_id:2})
// .returning('*')
// .then(rows =>{
//   console.log(rows)
// })
// .catch(err =>{
//   console.log(err)
// })

// db('country')
// .where({country:'Thiago1'})
// .del()
// .returning('*')
// .then(rows =>{
//   console.log(rows)
// })
// .catch(err =>{
//   console.log(err)
// })