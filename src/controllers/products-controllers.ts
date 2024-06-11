import { Request, Response } from "express";
import {
  createProductsService,
  deleteProductsService,
  getAllProductsService,
  updateProductsService,
} from "../services/products-service";

export const getAllProcuts = async (request: Request, response: Response) => {
  const products = await getAllProductsService();
  response.json(products);
};

export const createProducts = async (request: Request, response: Response) => {
  const { name, price, category } = request.body;
  console.log("Logging JSON", name, price, category);
  const newProducts = await createProductsService({ name, price, category });

  return response.json(newProducts);
};

export const updateProducts = async (request: Request, response: Response) => {
  const { name, price, category, id } = request.body;
  const updateProducts = await updateProductsService(id, {
    name,
    price,
    category,
  });

  return response.json(updateProducts);
};

export const deleteProducts = async (request: Request, response: Response) => {
  const { id } = request.body;
  const deleteProduct = deleteProductsService(id);

  return response.json(updateProducts);
};
