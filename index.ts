import express, { Application } from "express";

import mongoose from "./Config/Database";

const port: number = 3500;

// Extantiated my server from express
const app: Application = express();
mongoose;

app.listen(port, () => {
  console.log("");
  console.log(`Server is running and listening to port on ${port}`);
});
