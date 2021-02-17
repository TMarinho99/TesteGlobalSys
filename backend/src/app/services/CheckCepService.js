/* eslint-disable class-methods-use-this */
import { Op } from 'sequelize';
import Cep from '../models/Cep';

class ListCepService {
  async check(cep) {
    const checkCep = await Cep.findOne({
      where: {
        [Op.and]: [
          { faixa_inicio: { [Op.lte]: cep } },
          { faixa_fim: { [Op.gte]: cep } },
        ],
      },
    });
    if (!checkCep) {
      throw Error('Cep does not exist');
    }

    return checkCep;
  }
}

export default new ListCepService();
