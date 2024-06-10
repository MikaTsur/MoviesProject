/*C:\Users\morellyo\react_project\ex\server\index.js*/
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");

const customersController = require("./controllers/customersController");
const productsController = require("./controllers/productsController");

const app = express();
const PORT = 3011;

connectDB();

app.use(cors());

app.use(express.json());

app.use("/customers", customersController);
app.use("/products", productsController);
/*app.use("/movies", moviesController);*/

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
