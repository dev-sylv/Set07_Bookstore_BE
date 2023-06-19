import express from "express";

import { UploadBooks, ViewAllBooks } from "../Controller/BooksController";

const Router = express.Router();

Router.route("/upload-books").post(UploadBooks);
Router.route("/all-books").get(ViewAllBooks);

export default Router;
