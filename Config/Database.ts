import mongoose from "mongoose";

const DB_URL: string = "mongodb://0.0.0.0:27017/Set07Bookstore";

mongoose.connect(DB_URL);

mongoose.connection
  .on("open", () => {
    console.log("");
    console.log("Database is connected");
  })
  .once("error", () => {
    console.log("An error occured in connecting Database");
  });

export default mongoose;
