import axios from 'axios';


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character);
         dispatch({
            type: 'ADD_FAV',
            payload: data,
         })
      } catch{
         alert('Error en addFav:', error);
      }
   };
}


export const remoFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
   try{
      const {data} = await axios.delete(endpoint);
      dispatch({
         type: 'REMOVE_FAV',
         payload: data,
   });
   } catch {
      alert('error en remoFav:', error)
   }
  };
}

//-----------------ejercicio de hooks

//filtrar por genero
export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender
    }
}


//ordenar 
export const orderCards = (order) => {
    return {
        type: 'ORDER',
        payload: order
    }

}
