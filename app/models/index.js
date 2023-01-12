const dbConfig = require("../config/database");
const monggose = require("mongoose");


module.exports={
    monggose,
    url:dbConfig.url,
    user:require("./user.model.js")(monggose),
    product:require("./product.model.js")(monggose),
    category:require("./category.model.js")(monggose)
}