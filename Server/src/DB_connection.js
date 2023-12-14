require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const favoriteModel = require('./models/Favorite');
const userModel = require('./models/User')


// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false}
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

favoriteModel(sequelize);

userModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models; //van a estar todos los modelos y en este caso destructura user y favorites

     //metodo muchos a muchos //a travez de
User.belongsToMany(Favorite, {through: 'user_favorite'})
Favorite.belongsToMany(User, {through: 'user_favorite'})

//relacion uno a muchos
//User.hasMany(favorite) 
//Favorite.BelongsTo(User)

module.exports = {
   User,
   Favorite,
   conn: sequelize, //se exporta la instancia, para sincronizar (conecta)
};
