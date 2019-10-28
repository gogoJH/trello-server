import "reflect-metadata";
import { createConnection } from "typeorm";

export const DB_Connect = () => {
  createConnection().then(async () => {
    // connection not used?
    try {
      console.log("TypeORM Start");
    } catch (e) {
      console.log(e);
    }
  });
};

export default DB_Connect;
