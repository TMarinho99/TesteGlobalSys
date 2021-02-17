/* eslint-disable class-methods-use-this */
import { Op } from 'sequelize';
import ZipCode from '../models/ZipCode';

class ListZipCodeService {
  async check(zipCode) {
    const checkZipCode = await ZipCode.findOne({
      where: {
        [Op.and]: [
          { startTrack: { [Op.lte]: zipCode } },
          { endTrack: { [Op.gte]: zipCode } },
        ],
      },
      attributes: ['storeCode', 'startTrack', 'endTrack'],
    });
    if (!checkZipCode) {
      throw Error('ZipCode does not match');
    }

    return checkZipCode;
  }
}

export default new ListZipCodeService();
