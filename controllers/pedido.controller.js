const db = require("../models");
const Pedido = db.pedidos;
const Op = db.Sequelize.Op;



// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Material) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const pedido = {
        Material: req.body.Material,
        Cantidad: req.body.Cantidad,
        valor: req.body.valor
    };
  
    // Save Tutorial in the database
    Pedido.create(pedido)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Cliente."
        });
      });
  };
  
  // Retrieve all Tutorials from the database.
  exports.findAll = (req, res) => {
    const Material = req.query.Material;
    var condition = Material ? { Material: { [Op.iLike]: `%${Material}%` } } : null;
  
    Pedido.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Cliente."
        });
      });
  };