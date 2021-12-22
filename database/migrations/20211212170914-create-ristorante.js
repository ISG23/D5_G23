'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ristoranti', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      citta: {
        type: Sequelize.STRING
      },
      indirizzo: {
        type: Sequelize.STRING
      },
      numero_civico: {
        type: Sequelize.STRING
      },
      partita_iva: {
        type: Sequelize.STRING
      },
      tipo_cucina: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ristoranti');
  }
};