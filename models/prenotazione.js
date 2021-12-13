'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prenotazione extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Ristorante, {
        foreignKey: 'id_ristorante',
        as: 'ristorante'
      })
      this.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente',
        as: 'cliente'
      })
      this.belongsTo(models.Tavolo, {
        foreignKey: 'id_tavolo',
        as: 'tavolo'
      })
    }
  }
  Prenotazione.init({
    n_persone: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    data: DataTypes.DATE,
    data_fine: DataTypes.DATE,
    stato: DataTypes.INTEGER,
    id_tavolo: DataTypes.INTEGER,
    id_ristorante: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prenotazione',
    tableName: 'Prenotazioni'
  });
  return Prenotazione;
};