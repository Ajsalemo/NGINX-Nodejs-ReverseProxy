const express = require("express");
const router = express.Router();

const homeController = router.get("/", (_, res, error) => {
  try {
    res.send("NGINX-Nodejs-ReverseProxy");
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});

module.exports = homeController;
