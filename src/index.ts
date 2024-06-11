import { AppDataSource } from "./data-source";
import server from "./server";

AppDataSource.initialize()
  .then(async () => {
    server.listen(3001, () => {
      console.log("Server running in 3001");
    });
  })
  .catch((error) => console.log(error));
