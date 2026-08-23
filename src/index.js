import dotenv from "dotenv";
import connectDB from "./db/index.js";

import dns from "dns";
import { log } from "console";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running in port !!!! ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongodb connection failed :", error);
  });

/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/
     ${DB_name}`);
    app.on("Error", (error) => {
      console.log("Error :", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App listen is port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error :", error);
  }
})();
*/
