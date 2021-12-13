'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ristorante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Gestore,{
        foreignKey: 'id_ristorante',
        as: 'gestore'
      });
      this.hasMany(models.Ordine,{
        foreignKey: 'id_ristorante',
        as: 'ordini'
      });
      this.hasMany(models.Prenotazione,{
        foreignKey: 'id_ristorante',
        as: 'prenotazioni'
      });
      this.hasMany(models.Prodotto,{
        foreignKey: 'id_ristorante',
        as: 'menu'
      });
      this.hasMany(models.Tavolo,{
        foreignKey: 'id_ristorante',
        as: 'tavoli'
      });

    }
  }
  Ristorante.init({
    nome: DataTypes.STRING,
    citta: DataTypes.STRING,
    indirizzo: DataTypes.STRING,
    numero_civico: DataTypes.STRING,
    partita_iva: DataTypes.STRING,
    tipo_cucina: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ristorante',
    tableName: 'Ristoranti'
  });
  return Ristorante;
};