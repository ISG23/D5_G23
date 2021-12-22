'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tavolo extends Model {
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
      this.hasMany(models.Prenotazione, {
        foreignKey: 'id_tavolo',
        as: 'prenotazioni'
      })
    }
  }
  Tavolo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    numeroPersone: DataTypes.INTEGER,
    id_ristorante: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tavolo',
    tableName: 'Tavoli',

  });
  return Tavolo;
};