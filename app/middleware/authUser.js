const {verify} = require("jsonwebtoken")


const validateTokenUser = (req ,res , next) =>{
    const accesToken = req.header("accesToken")
    res.json(accesToken)
    if(!accesToken){
        return res.json({error : "user not login"})
    }else{
        
            const validToken =verify( accesToken ,"scretKeyUser" )

            if(validToken){
                return next()
                
            }
       
    }
}

module.exports = validateTokenUser