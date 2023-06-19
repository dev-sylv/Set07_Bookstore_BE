import express, { Application } from "express";

import mongoose from "./Config/Database";

import Router from "./Router/BookRoutes";

const port: number = 3500;

// Extantiated my server from express
const app: Application = express();
mongoose;

// Configuring the routes for the project
app.use("/api", Router);

app.listen(port, () => {
  console.log("");
  console.log(`Server is running and listening to port on ${port}`);
});
