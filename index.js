const express = require("express");
const cors = require("cors");
const db = require("./app/models")
const app = express();

const corsOptions = {
  origin: "*",
};

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json({limit: "30mb",extended:true}));


//konek ke database mongodb

const monggoseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
db.monggose.connect(db.url,monggoseConfig)

require("./app/routers/user.router")(app)
require("./app/routers/product.router")(app)
require("./app/routers/category.router")(app)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
