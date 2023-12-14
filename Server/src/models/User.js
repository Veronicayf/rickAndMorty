const sequelize = require('sequelize')
const { DataTypes } = require('sequelize'); //se requiere

module.exports = (sequelize) => { //recibe la instancia de sequelize
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER, //tipo de dato (entero)
         allowNull: false, //que no puede estar vacio
         primaryKey: true, //creacion de indice
         autoIncrement: true // para autoincrementar 
      },
      email: {
         type: DataTypes.STRING(50),
         allowNull: false, //le permito que esta nulo? no.
         isEmail: true //verifica que tenga formato de email
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   },
      {
         timestamps: false,
         freezeTableName: true
      }
   );
};
