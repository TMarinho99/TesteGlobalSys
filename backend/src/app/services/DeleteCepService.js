/* eslint-disable class-methods-use-this */
import Cep from '../models/Cep';

class DeleteCepService {
  async delete(id) {
    const existCep = await Cep.findByPk(id);

    if (!existCep) {
      throw Error('Cep does not exist');
    }

    await existCep.destroy();

    // eslint-disable-next-line no-useless-return
    return;
  }
}

export default new DeleteCepService();
