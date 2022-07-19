import express from "express";
import router from "./routes/router.js";

const app = express();
app.use(express.json());
app.use(router);
app.listen(3500, () => console.log('listening to 3500'));