import Sequelize from 'sequelize';

import ZipCode from '../app/models/ZipCode';

import databaseConfig from '../config/database';

const models = [ZipCode];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
