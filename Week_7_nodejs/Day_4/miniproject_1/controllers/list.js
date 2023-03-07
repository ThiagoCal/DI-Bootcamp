const {getList, insertToList} = require('../modules/list.js')


const _getList = (req,res) =>{
  getList()
  .then(data =>{
    res.json(data)
  })
  .catch(err =>{
    console.log(err)
  })
}

const _insertToList = (req, res) =>{
  insertToList(req.body)
  .then(data =>{
    res.json(data)
  })
  .catch(err =>{
    console.log(err)
  })
}


module.exports = {_getList, _insertToList}