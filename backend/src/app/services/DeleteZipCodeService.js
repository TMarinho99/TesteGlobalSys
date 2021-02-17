/* eslint-disable class-methods-use-this */
import ZipCode from '../models/ZipCode';

class DeleteZipCodeService {
  async delete(id) {
    const existZipCode = await ZipCode.findByPk(id);

    if (!existZipCode) {
      throw Error('ZipCode does not exist');
    }

    await existZipCode.destroy();

    // eslint-disable-next-line no-useless-return
    return;
  }
}

export default new DeleteZipCodeService();
