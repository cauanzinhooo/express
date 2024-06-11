import { ProductModelRepository } from "../data-source";
import { createProductsTypes } from "../types/products";

export const getAllProductsService = async () => {
  const products = await ProductModelRepository.find();

  return products;
};

export const createProductsService = async (products: createProductsTypes) => {
  const { name, price, category } = products;
  const newProducts = ProductModelRepository.create({ name, price, category });
  const saveProducts = await ProductModelRepository.save(newProducts);

  return saveProducts;
};

export const updateProductsService = async (
  id: number,
  products: createProductsTypes
) => {
  const { name, price, category } = products;
  const findProduct = await ProductModelRepository.findOneBy({ id });
  if (!findProduct) {
    throw new Error(`The product ${id} does exist`);
  }
  findProduct.name = products.name;
  findProduct.price = products.price;
  findProduct.category = products.category;
  await ProductModelRepository.save(findProduct);
  return findProduct;
};

export const deleteProductsService = async (id: number) => {
  const findProduct = await ProductModelRepository.findOneBy({ id });
  if (!findProduct) {
    throw new Error(`The product ${id} does exist`);
  }
  await ProductModelRepository.delete(id);
  return findProduct;
};
