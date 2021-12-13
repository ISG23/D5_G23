'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Ordine, {
        foreignKey: 'id_cliente',
        as: 'ordini'
      })
      this.hasMany(models.Prenotazione, {
        foreignKey: 'id_cliente',
        as: 'prenotazioni'
      })
    }
  };
  Cliente.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'Clienti'
  });
  return Cliente;
};