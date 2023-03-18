const {db} = require('../config/db.js');


const getAllProducts = () =>{
  return db('products')
  .select('id','name', 'price')
  .orderBy('name')
}

const getProductById = (pid) =>{
  return db('products')
  .select('id', 'name', 'price')
  .where({id:pid})
}

const searchProducts = (query) =>{
  return db('products')
  .select('id', 'name', 'price')
  .whereILike('name', `${query}%`)
}

const insertProduct = (product) => {
  return db('products')
  .insert(product)
  .returning('*')
}

const updateProduct =(id, product) =>{
  return db('products')
  .update(product)
  .where({id:id})
  .returning('*')
}

const deleteProduct = (id) => {
  return db('products')
  .del()
  .where({id:id})
  .returning('*')
}

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
  searchProducts
}