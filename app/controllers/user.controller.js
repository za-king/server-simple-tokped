const db = require("../models");
const User = db.user;
const bycript = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.create = (req, res) => {
  const { username, password } = req.body;
  bycript
    .hash(password, 10)
    .then((hash) => {
      User.create({
        username: username,
        password: hash,
      });

      res.json({ messsage: "berhasil ditambahkan" });
    })
    .catch((err) => res.status(500).send({ messsage: err.messsage }));
};
exports.findAll = (req, res) => {
  User.find().then((data) => {
    res.send(data);
  });
};
exports.show = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    (data) => {
      if (!data) {
        res.status(404).send({ message: "tidak dapat update data" });
      }

      res.send({ message: "data berhasil di update" });
    }
  );
};

exports.findOne = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (!user) {
    res.json({ message: "user tidak ditemukan" });
  } else {
    bycript.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "wrong pass  and username" });
      } else {
        const accesToken = jwt.sign(
          { username: user.username, id: user.id },
          "scretKeyUser"
        );
        res.header("accesToken", accesToken, { httpOnly: true });
        res.json({ accesToken: accesToken, id: user.id });
      }
    });
  }
};
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `tidak ada data dengan id : ${id} didalam database`,
          });
      }

      res.send({ message: "data berhasi dihapus" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
