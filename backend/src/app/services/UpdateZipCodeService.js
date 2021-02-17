/* eslint-disable class-methods-use-this */
import ZipCode from '../models/ZipCode';

class UpdateZipCodeService {
  async update(zipCode) {
    const zipCodeList = await ZipCode.findByPk(zipCode.id);

    if (!zipCodeList) {
      throw Error('ZipCode not found');
    }

    await zipCodeList.update(zipCode);
    await zipCodeList.save();

    return zipCodeList;
  }
}

export default new UpdateZipCodeService();
