import Sequelize, { Model } from 'sequelize';

class Cep extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo_loja: Sequelize.STRING,
        faixa_inicio: Sequelize.INTEGER,
        faixa_fim: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Cep;
