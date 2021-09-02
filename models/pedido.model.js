module.exports = (sequelize, Sequelize) => {
    const Pedido = sequelize.define("pedido", {
      Material: {
        type: Sequelize.STRING
      },
      Cantidad: {
        type: Sequelize.INTEGER 
      },
      valor: {
        type: Sequelize.FLOAT
      }
    });
  
    return Pedido;
  };