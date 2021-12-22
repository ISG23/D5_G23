'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tavoli', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numeroPersone: {
        type: Sequelize.INTEGER
      },
      id_ristorante: {
        type: Sequelize.INTEGER,
        //references: { model: 'Ristorante', key: 'id' }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tavoli');
  }
};