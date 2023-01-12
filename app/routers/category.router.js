module.exports = app =>{
    const category = require("../controllers/category.controller");
    const r = require("express").Router()

    r.get("/",category.findAll )
    r.post("/",category.create )
    
    

    app.use("/category",r)
}