import express from 'express';

import ZipCodeRoutes from './routes/ZipCodeRoutes.routes';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(ZipCodeRoutes);
  }
}

export default new App().server;
