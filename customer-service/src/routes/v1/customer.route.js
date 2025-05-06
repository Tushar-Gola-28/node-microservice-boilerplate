const express = require("express")
const { asyncHandler } = require("../../middleware/error-handler")
const { addCustomer } = require("../../controllers/v1/customer.controllers")
const route = express.Router()


route.post("/customer", asyncHandler(addCustomer))
route.get("/customers", asyncHandler(addCustomer))
route.get("/customers/:id", asyncHandler(addCustomer))

module.exports = route