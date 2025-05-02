require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
