'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrariRistorante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrariRistorante.init({
    id_ristorante: DataTypes.INTEGER,
    giorni_apertura: DataTypes.ARRAY(DataTypes.INTEGER),
    orari_mattina: DataTypes.ARRAY(DataTypes.TIME),
    orari_pomeriggio: DataTypes.ARRAY(DataTypes.TIME),
    ferie: DataTypes.RANGE(DataTypes.DATE)
  }, {
    sequelize,
    modelName: 'OrariRistorante',
    tableName: 'OrariRistoranti'
  });
  return OrariRistorante;
};