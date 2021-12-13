'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gestore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Ristorante,{
        foreignKey: 'id_ristorante',
        as: 'ristorante'
      });
    }
  }
  Gestore.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    nome: DataTypes.STRING,
    cognome: DataTypes.STRING,
    telefono: DataTypes.STRING,
    id_ristorante: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Gestore',
    tableName: 'Gestori'
  });
  return Gestore;
};