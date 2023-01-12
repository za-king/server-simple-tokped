const db = require("../models");
const Category = db.category;

exports.create = (req, res) => {
    const oneCategory = {...req.body}
    
    try {
      Category.create(oneCategory )
      res.send(oneCategory)
    } catch (error) {
      console.log(error)
    }
  };
  
  exports.findAll = (req, res) => {
    Category.find().then((data) => {
      res.send(data);
    });
  };
  