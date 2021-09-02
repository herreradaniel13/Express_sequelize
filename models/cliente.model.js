module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      nombre: {
        type: Sequelize.STRING
      },
      documento: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      }
    });
  
    return Cliente;
  };