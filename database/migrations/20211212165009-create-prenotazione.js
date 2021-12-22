'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prenotazioni', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      n_persone: {
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      orario: {
        type: Sequelize.TIME
      },
      stato: {
        type: Sequelize.INTEGER
      },
      id_tavolo: {
        type: Sequelize.INTEGER,
        //references: { model: 'Tavolo', key: 'id' }
      },
      id_ristorante: {
        type: Sequelize.INTEGER,
        //references: { model: 'Ristorante', key: 'id' }
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        //references: { model: 'Clienti', key: 'id' }
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
    await queryInterface.dropTable('Prenotazioni');
  }
};