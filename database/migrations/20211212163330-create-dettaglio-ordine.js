'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DettaglioOrdini', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qta: {
        type: Sequelize.INTEGER
      },
      id_prodotto: {
        type: Sequelize.INTEGER,
        //references: { model: 'Prodotto', key: 'id' }
      },
      id_ordine: {
        type: Sequelize.INTEGER,
        //references: { model: 'Ordine', key: 'id' }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DettaglioOrdini');
  }
};