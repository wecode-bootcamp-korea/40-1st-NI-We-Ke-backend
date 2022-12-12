const express = require("express")

const cartController = require("../controllers/cart.controller")

const cartRouter = express.Router();


cartRouter.post("/addcart", cartController.addCart)

//cartRouter.delete("/removecart", cartContoller.removeCart)


module.exports = { cartRouter }
