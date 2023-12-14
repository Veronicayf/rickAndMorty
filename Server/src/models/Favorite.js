const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER, //tipo de dato (entero)
         primaryKey: true, //creacion de indice
         allowNull: false, //que no puede estar vacio
         autoIncrement: true // para autoincrementar 
      },

      name: {
         type: DataTypes.STRING(30),
         allowNull: false
      },

      status: {
                      // ENUM = tipo de dato que restringe la busqueda.
         type: DataTypes.ENUM('Alive', 'Dead', 'unknow'), 
         allowNull: false
      },

      species: {
         type: DataTypes.STRING(15),
         allowNull: false
      },

      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         // defaultValue: 'unknow'    //para que no devuelva un campo vacio
      },

      origin: {
         type: DataTypes.STRING(30),
         allowNull: false
      },

      image: {
         type: DataTypes.STRING,
         isUrl : true // valida que viene de una url
      }
   }, { timestamps: false });
};
