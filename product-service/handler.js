"use strict";
const products = require("./products.json");

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: products,
  };
};

module.exports.getProductsById = async (event) => {
  const { id } = event.pathParameters;
  let result = products.filter((one) => one.id === id);
  if (result.length === 0) {
    return {
      statusCode: 404,
      body: "Product not found",
    };
  }
  return {
    statusCode: 200,
    body: result,
  };
};
