module.exports = app => {
    const pedidos = require("../controllers/pedido.controller.js");
   // const { Router } = require("express");
   // const router = Router();
    var router = require("express").Router();
    // Create a new clientes
    router.post("/", pedidos.create);
  
    // Retrieve all clientes
    router.get("/all", pedidos.findAll);
  
    // Retrieve all published clientes
   // router.get("/published", clientes.findAllPublished);
  
    // Retrieve a single clientes with id
    //router.get("/:id", clientes.findOne);
  
    // Update a clientes with id
    //router.put("/:id", clientes.update);
  
    // Delete a clientes with id
    //router.delete("/:id", clientes.delete);
  
    // Delete all clientes
    //router.delete("/", clientes.deleteAll);
  
    app.use("/api/pedidos", router);
  };