module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('zip_codes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      store_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start_track: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      end_track: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('zip_codes');
  },
};
