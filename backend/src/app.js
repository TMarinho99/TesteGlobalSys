import express from 'express';

import CepRoutes from './routes/CepRoutes.routes';
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
    this.server.use(CepRoutes);
  }
}

export default new App().server;
