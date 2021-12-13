'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ordini', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      completato: {
        type: Sequelize.BOOLEAN
      },
      id_paypal: {
        type: Sequelize.STRING
      },
      id_ristorante: {
        type: Sequelize.INTEGER,
        //references: { model: 'Ristorante', key: 'id' }
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        //references: { model: 'Cliente', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ordini');
  }
};