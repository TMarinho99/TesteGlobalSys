/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import CreateCepService from '../services/CreateCepService';
import ListCepService from '../services/ListCepService';
import CheckCepService from '../services/CheckCepService';
import UpdateCepService from '../services/UpdateCepService';
import DeleteCepService from '../services/DeleteCepService';

class CepController {
  async store(request, response) {
    try {
      const { codigo_loja, faixa_inicio, faixa_fim } = request.body;

      const cep = await CreateCepService.create({
        codigo_loja,
        faixa_inicio,
        faixa_fim,
      });

      return response.status(201).json(cep);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async index(request, response) {
    try {
      const cepList = await ListCepService.index();

      return response.json(cepList);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async check(request, response) {
    try {
      const { cep } = request.body;
      const checkCep = await CheckCepService.check(cep);

      return response.json(checkCep);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { codigo_loja, faixa_inicio, faixa_fim } = request.body;
      const cep = {
        id,
        codigo_loja,
        faixa_inicio,
        faixa_fim,
      };
      const updateCep = await UpdateCepService.update(cep);

      return response.status(200).json(updateCep);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      await DeleteCepService.delete(id);
      console.log(123);
      return response.sendStatus(200);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default new CepController();
