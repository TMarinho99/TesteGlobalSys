/* eslint-disable class-methods-use-this */
import Cep from '../models/Cep';

class CheckCepService {
  async index() {
    const cepList = await Cep.findAll();

    if (!cepList) {
      throw Error('List empty');
    }
    return cepList;
  }
}

export default new CheckCepService();
