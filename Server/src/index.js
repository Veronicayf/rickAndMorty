const  server  = require('./app')
const PORT = 3001;
const { conn, User } = require('./DB_connection');

//es una promesa
conn.sync({force: true})
.then(() => {
    server.listen(PORT, () => console.log(`Listening on the port: ${PORT}`));
    //se hace la modularizacion, para que no influya en los test.

})
// .then(async () => {
//     try{
//         const userTest = await User.create({
//             email: "ve@g.com",
//             password: "123456"
//         })
//         console.log('salio bien', userTest.toJSON());
//     } catch(error){
//         console.log('algo fallo: ', error);
//     }
// })

