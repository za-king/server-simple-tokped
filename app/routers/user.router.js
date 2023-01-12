module.exports = app =>{
    const user = require("../controllers/user.controller");
    const r = require("express").Router()
    const validateTokenUser = require("../middleware/authUser")

    r.get("/",user.findAll )
    r.get("/:id",user.show )
    r.post("/",user.create )
    r.put("/:id",user.update )
    r.delete("/:id",user.delete )
    r.post("/signin",user.findOne )
    

    app.use("/user",r)
}