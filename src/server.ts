import express from "express";
import productsRoutes from "./routes/product-routes";

const server = express();

server.use(express.json());
server.use("/products", productsRoutes);
export default server;
