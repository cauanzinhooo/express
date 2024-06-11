import "reflect-metadata";
import { DataSource } from "typeorm";
import { Products } from "./entity/products";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "cg",
  database: "express",
  synchronize: true,
  logging: false,
  entities: [Products],
  migrations: [],
  subscribers: [],
  dropSchema: true,
});

export const ProductModelRepository = AppDataSource.getRepository(Products);
