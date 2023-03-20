import express from "express";
import cors from "cors";
import { router } from "../routes";
import db from "../db/mongo";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use((_req, res, _next) => {
  res.status(404).json({ message: "Not found" });
});

db.then(() => {
  console.log("db is connected and ready");
});

export default app;
