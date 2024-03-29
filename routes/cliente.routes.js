module.exports = app => {
    const clientes = require("../controllers/cliente.controller.js");
   // const { Router } = require("express");
   // const router = Router();
    var router = require("express").Router();
    // Create a new clientes
    router.post("/", clientes.create);
  
    // Retrieve all clientes
    router.get("/all", clientes.findAll);
  
    // Retrieve all published clientes
   // router.get("/published", clientes.findAllPublished);
  
    // Retrieve a single clientes with id
    router.get("/:id", clientes.findOne);
  
    // Update a clientes with id
    router.put("/:id", clientes.update);
  
    // Delete a clientes with id
    router.delete("/:id", clientes.delete);
  
    // Delete all clientes
    //router.delete("/", clientes.deleteAll);
  
    app.use("/api/clientes", router);
  };