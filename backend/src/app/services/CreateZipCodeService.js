/* eslint-disable class-methods-use-this */
import { Op } from 'sequelize';
import ZipCode from '../models/ZipCode';

class CreateZipCodeService {
  async create(zipCode) {
    const existZipCodeCode = await ZipCode.findOne({
      where: {
        [Op.or]: [
          {
            startTrack: {
              [Op.between]: [zipCode.startTrack, zipCode.endTrack],
            },
          },
          {
            endTrack: { [Op.between]: [zipCode.startTrack, zipCode.endTrack] },
          },
        ],
      },
    });

    if (existZipCodeCode) {
      throw Error('ZipCode already');
    }

    const response = await ZipCode.create(zipCode);

    return response;
  }
}

export default new CreateZipCodeService();
