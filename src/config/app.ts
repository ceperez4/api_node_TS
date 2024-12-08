import express, { Application } from "express";
import cors from "cors";
import { router } from "../routes";
import db from "../db/mongo.connection";
import { clientRedis } from '../db/redis.connection';
import { PORT } from './config';
import { createFolder } from "../helpers/files.handle";

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = PORT as number;
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeMongo();
    this.initializeFolders();
  }

  initializeMiddlewares() {
    this.app.use(express.json({ limit: '1000mb' }));
    this.app.use(
      cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      })
    );
  }

  initializeRoutes() {
    this.app.use('/api', router);
    this.app.use('/files', express.static('src/public/'));
    this.app.use((req, res) => {
      res.status(501).json({ message: `route not found: ${req.originalUrl}` });
    });
  }

  async initializeFolders() {
    await createFolder('src/public/uploads')
  }


  initializeMongo() {
    db.then(() => {
      console.log("mongo is connected and ready");
    }).catch((error) => {
      console.error('unexpected error Mongo', error);
    });
  }

  initializeRedis() {
    clientRedis.on('error', err => console.log('Redis Client Error', err));
    clientRedis.connect().then(() => {
      console.log("redis is connected and ready");
    }).catch((error) => {
      console.log('unexpected error Mongo Redis', error);
    });
  }

  listen() {
    this.app.listen(this.port, '0.0.0.0', () => {
      console.log(`Server listenning on port ${this.port}`);
    });
  }

}

export default Server;