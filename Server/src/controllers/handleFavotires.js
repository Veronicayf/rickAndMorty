// let myFavorites = [];

// const postFav = (req, res) => {
//     // console.log('soy el body',req.body) //metodos para el body: es para un post

//     const char = req.body;//por body va a estar llegando mi objeto id
//     myFavorites.push(char);//se utiliza el push para agregar el id favorito

//     return res.status(200).json(myFavorites) //devuelva un status 200 en formato json (se usa el return por las llaves de la funcion)
// };

// const deleteFav = (req, res) => {
//     let { id } = req.params; //se queda con la ruta dinamica

//     //me crea un nuevo arreglo en el que va a estar todos los diferentes al id seleccionado.
//     myFavorites = myFavorites.filter((favorite) => favorite.id !== id) //se parsea

//     //se le coloca el return porque es el cierre de una funcion
//     return res.status(200).json(myFavorites)
//                         // se pisa el array anterior
// };

// // const getFavs = (req, res)=>{ //obtener - leer favoritos
// //     res.status(200).json(myFavorites)
// // }

// module.exports = {
//     postFav,
//     deleteFav
// }