'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prodotto extends Model {
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
      this.belongsToMany(models.Ordine, {
        foreignKey: 'id_ordine',
        through: 'dettaglioordini',
        as: 'oridni'
      })
    }
  };
  Prodotto.init({
    nome: DataTypes.STRING,
    ingredienti: DataTypes.STRING,
    prezzo: DataTypes.DOUBLE,
    disponibilita: DataTypes.BOOLEAN,
    id_ristorante: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prodotto',
    tableName: 'Prodotti'
  });
  return Prodotto;
};