const db = require("../models");
const Product = db.product;

exports.create = (req, res) => {
  const oneProduct = { ...req.body };

  try {
    Product.create(oneProduct);
    res.send(oneProduct);
  } catch (error) {
    console.log(error);
  }
};

exports.findAll = async (req, res) => {
  const search = req.query.search || "";

  try {
    const product = await Product.find({
      title: { $regex: search, $options: "i" },
    });

    const response = {
      status: "succes",
      product,
    };

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "internal server error" });
  }
};

exports.show = async (req, res) => {
  const id = req.params.id;
  try {
    const productById = await Product.findById(id);

    const response = {
      status: "succes",
      product: productById,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: true, message: "internal server error" });
  }
};
