const express = require("express");

const { authRouter } = require("./auth.router");
const  {productRouter} = require("./product");


/* searchRouter 보다는 ProductRouter , 
앤드포인트도 search 보단 products가 더 바람직하다 */


const routes = express.Router();

routes.use("/auth", authRouter);
routes.use('/products', productRouter)



module.exports = { routes };