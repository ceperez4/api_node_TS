import { Router } from "express";
import {
  getItem,
  getItems,
  updateItem,
  deleteItem,
  postItem,
} from "../controllers/item";
import { logMiddleware } from "../middlewares/log";
import { checkJwt } from "../middlewares/session";
const router = Router();

router.get("/:id",logMiddleware, getItem);
router.get("/",checkJwt, getItems); //Ruta protegida JWT 
router.post("/insert", postItem);
router.put("/update/:id", updateItem);
router.delete("/:id", deleteItem);
export { router };
