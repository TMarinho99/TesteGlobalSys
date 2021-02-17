/* eslint-disable class-methods-use-this */
import ZipCode from '../models/ZipCode';

class CheckZipCodeService {
  async index() {
    const zipCodeList = await ZipCode.findAll({
      attributes: ['id', 'storeCode', 'startTrack', 'endTrack'],
    });

    if (!zipCodeList) {
      throw Error('List empty');
    }
    return zipCodeList;
  }
}

export default new CheckZipCodeService();
