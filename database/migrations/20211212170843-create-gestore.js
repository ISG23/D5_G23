'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction((transaction) => {
      return queryInterface.createTable('Gestori', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        email: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        nome: {
          type: Sequelize.STRING
        },
        cognome: {
          type: Sequelize.STRING
        },
        telefono: {
          type: Sequelize.STRING
        },
        id_ristorante: {
          type: Sequelize.INTEGER,
          //references: { model: 'Ristorante', key: 'id' }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
          .then(() => queryInterface.sequelize.query(`
          ALTER TABLE "Gestori"
            INHERIT "Users"
        `, { transaction }));
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Gestori');
  }
};