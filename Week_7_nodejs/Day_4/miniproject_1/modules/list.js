const {db} = require('../config/db.js');

const getList = () =>{
  return db('shopping_list')
  .select('id', 'product', 'quantity')
  .orderBy('id')
}

const insertToList = (item) =>{
  return db('shopping_list')
  .insert(item)
  .returning('*')
}



module.exports = {getList, insertToList}