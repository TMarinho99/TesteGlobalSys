/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import CreateZipCodeService from '../services/CreateZipCodeService';
import ListZipCodeService from '../services/ListZipCodeService';
import CheckZipCodeService from '../services/CheckZipCodeService';
import UpdateZipCodeService from '../services/UpdateZipCodeService';
import DeleteZipCodeService from '../services/DeleteZipCodeService';

class ZipCodeController {
  async store(request, response) {
    try {
      const { storeCode, startTrack, endTrack } = request.body;

      const zipCode = await CreateZipCodeService.create({
        storeCode,
        startTrack,
        endTrack,
      });

      return response.status(201).json(zipCode);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async index(request, response) {
    try {
      const zipCodeList = await ListZipCodeService.index();

      return response.json(zipCodeList);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async check(request, response) {
    try {
      const { zipCode } = request.body;
      const checkZipCode = await CheckZipCodeService.check(zipCode);

      return response.json(checkZipCode);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { storeCode, startTrack, endTrack } = request.body;
      const zipCode = {
        id,
        storeCode,
        startTrack,
        endTrack,
      };
      const updateZipCode = await UpdateZipCodeService.update(zipCode);

      return response.status(200).json(updateZipCode);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      await DeleteZipCodeService.delete(id);
      return response.sendStatus(200);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default new ZipCodeController();
