import express, { Application } from "express";

const port: number = 3500;

// Extantiated my server from express
const app: Application = express();

app.listen(port, () => {
  console.log("");
  console.log(`Serveris running and listening to port on ${port}`);
});
