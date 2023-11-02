import express from "express";

const router = express.Router();

export const homeController = router.get("/", (_req, res) => {
  try {
    res.send("NGINX-Nodejs-ReverseProxy");
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});