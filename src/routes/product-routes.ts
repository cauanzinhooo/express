import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  getAllProcuts,
  updateProducts,
} from "../controllers/products-controllers";

const productsRoutes = Router();

productsRoutes.get("/", getAllProcuts);
productsRoutes.post("/", createProducts);
productsRoutes.put("/", updateProducts);
productsRoutes.delete("/", deleteProducts);

export default productsRoutes;
