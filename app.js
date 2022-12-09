require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { appDataSource } = require("./src/models/data-source")
const { routes } = require("./src/routes");


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.use(routes);


app.get('/ping'  , function (req,res ,next){
  res.json({message :'pong'})
})

appDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!")
})
.catch((err) => {
  console.log("Error during Data Source initialization", error)
})

const PORT = process.env.PORT;

app.listen(PORT, () => {  
  console.log(`Listening on Port ${PORT}`);
});



app.get("/search/:inputId", async (req, res) => {
  const userId = req.params.inputId;
  const user = await appDataSource.manager.query(
    `SELECT 
       products.name,
       categories.name,
       product_options.price
       FROM products
       JOIN categories ON categories.id = products.category_id 
       LEFT JOIN product_options ON product_options.product_id = products.id
       WHERE categories.id = ${userId}
      `
  );
});     




