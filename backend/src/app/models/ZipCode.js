import Sequelize, { Model } from 'sequelize';

class ZipCode extends Model {
  static init(sequelize) {
    super.init(
      {
        storeCode: Sequelize.STRING,
        startTrack: Sequelize.STRING,
        endTrack: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default ZipCode;
