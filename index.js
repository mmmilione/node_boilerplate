import express from "express";
import mongo from "./models/db.js";
import router from "./routes/router.js";

const app = express();
app.use(express.json());
app.use(router);
mongo(app);