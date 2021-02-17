/* eslint-disable class-methods-use-this */
import Cep from '../models/Cep';

class UpdateCepService {
  async update(cep) {
    const cepList = await Cep.findByPk(cep.id);

    if (!cepList) {
      throw Error('Cep not found');
    }

    await cepList.update(cep);
    await cepList.save();

    return cepList;
  }
}

export default new UpdateCepService();
