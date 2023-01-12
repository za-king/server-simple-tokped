module.exports = app =>{
    const product = require("../controllers/product.controller");
    const r = require("express").Router()

    r.get("/",product.findAll )
    r.post("/",product.create )
    r.get("/:id",product.show )
    
    

    app.use("/product",r)
}