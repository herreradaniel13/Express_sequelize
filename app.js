const express = require('express')
//const controller =require('./src/controller')
//const routes =require('./routes/cliente.routes')
const bodyParser = require('body-parser')
const app = express()

const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Base de datos
const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});
/*
app.get('/', (req, res) => {
  res.send('Hello World!')
});
*/

//Rutas
//app.use('/',routes);
require("./routes/cliente.routes")(app);
require("./routes/pedido.routes")(app);
//require("./routes/")(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})