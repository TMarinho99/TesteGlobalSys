/* eslint-disable class-methods-use-this */
import { Op } from 'sequelize';
import Cep from '../models/Cep';

class CreateCepService {
  async create(cep) {
    const existCep = await Cep.findOne({
      where: {
        [Op.or]: [
          { faixa_inicio: { [Op.between]: [cep.faixa_inicio, cep.faixa_fim] } },
          { faixa_fim: { [Op.between]: [cep.faixa_inicio, cep.faixa_fim] } },
        ],
      },
    });

    if (existCep) {
      throw Error('Cep already');
    }

    const response = await Cep.create(cep);

    return response;
  }
}

export default new CreateCepService();
