'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrariRistoranti', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_ristorante: {
        type: Sequelize.INTEGER
      },
      giorni_apertura: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      orari_mattina: {
        type: Sequelize.ARRAY(Sequelize.TIME),
        set (valueToBeSet) {
          this.setDataValue('orari_mattina', valueToBeSet)
        }
      },
      orari_pomeriggio: {
        type: Sequelize.ARRAY(Sequelize.TIME),
        set (valueToBeSet) {
          this.setDataValue('orari_pomeriggio', valueToBeSet)
        }
      },
      ferie: {
        type: Sequelize.RANGE(Sequelize.DATE),
        allowNull: true
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
    await queryInterface.dropTable('OrariRistoranti');
  }
};