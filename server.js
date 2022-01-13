const express = require("express");
const homeController = require("./controllers/homeController");

const port = process.env.PORT || 3000;
const app = express();

app.use(homeController);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
