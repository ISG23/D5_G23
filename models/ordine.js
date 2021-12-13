'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ordine extends Model {
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
      this.hasMany(models.DettaglioOrdine, {
        foreignKey: 'id_ordine',
        as: 'prodotti'
      })
    }
  };
  Ordine.init({
    nome: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    data: DataTypes.DATE,
    completato: DataTypes.BOOLEAN,
    id_paypal: DataTypes.STRING,
    id_ristorante: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ordine',
    tableName: 'Ordini'
  });
  return Ordine;
};