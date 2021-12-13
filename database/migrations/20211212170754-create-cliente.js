'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction((transaction) => {
      return queryInterface.createTable('Clienti', {
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
        username: {
          type: Sequelize.STRING
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
          ALTER TABLE "Clienti"
            INHERIT "Users"
        `, { transaction }));
    });

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clienti');
  }
};