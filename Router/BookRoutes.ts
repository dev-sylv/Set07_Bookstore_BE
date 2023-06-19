import express from "express";
import { UploadBooks } from "../Controller/BooksController";

const Router = express.Router();

Router.route("/upload-books").post(UploadBooks);

export default Router;
