const  {getAllProducts, getProductById, insertProduct, updateProduct, deleteProduct, searchProducts} =  require('../modules/products.js')

const _getAllProducts =(req,res) =>{
  getAllProducts()
  .then(data =>{
    res.json(data)
  })
  .catch(err =>{
    console.log(err)
  })
}

const _getProductById = (req,res) =>{
  getProductById(req.params.id)
  .then(data =>{
    res.json(data)
  })
  .catch(err =>{
    console.log(err)
  })
}

const _searchProducts = (req,res) =>{
  searchProducts(req.query.q) //q is in the query path /?q= could be anything instead of q
  .then(data =>{
    res.json(data)
  })
  .catch(err =>{
    console.log(err)
  })
}

const _insertProduct = (req,res) =>{
  insertProduct(req.body)
  .then(data =>{
    _getAllProducts(req,res)
  })
  .catch(err =>{
    console.log(err)
  })
}

const _updateProduct = (req, res) =>{
  updateProduct(req.params.id, req.body)
  .then(data =>{
    res.json(data)
  })
  .catch(err =>{
    console.log(err)
  })
}


const _deleteProduct = (req, res) =>{
  deleteProduct(req.params.id)
  .then(data =>{
    res.json(data)
  })
  .catch(err =>{
    console.log(err)
  })
}

module.exports = {
  _getAllProducts, _getProductById, _insertProduct, _updateProduct, _deleteProduct, _searchProducts
}