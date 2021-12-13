'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DettaglioOrdine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Ordine, {
        foreignKey: 'id_ordine',
        as: 'ordine'
      })
      this.belongsTo(models.Prodotto, {
        foreignKey: 'id_prodotto',
        as: 'prodotto'
      })
    }
  };
  DettaglioOrdine.init({
    qta: DataTypes.INTEGER,
    id_prodotto: DataTypes.INTEGER,
    id_ordine: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DettaglioOrdine',
    tableName: 'DettaglioOrdini'
  });
  return DettaglioOrdine;
};