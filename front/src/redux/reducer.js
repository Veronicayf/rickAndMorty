const initialState = {
    myFavorites: [],
    allCharacters: [] // se declara en el estado local para el filter y el order
};

//el reducer es una funcion pura 

//              Est.local   default  ,  accion
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return {
                ...state,
                allCharacters: action.payload,
                myFavorites: action.payload,
            }
        case 'REMOVE_FAV':
            // const filteredFavs = state.allCharacters.filter((fav) => fav.id != action.payload)
            return {
                ...state,
                allCharacters: action.payload,
                myFavorites: action.payload
            }
        case 'FILTER':
            if (action.payload === 'All') return {
                ...state,
                myFavorites: state.allCharacters
            }

            const filteredCharacters = state.allCharacters.filter(
                char => char.gender === action.payload
            )
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case 'ORDER':
            let orderCopy = [...state.myFavorites]; //se ordenan los que ya estan filtrados
            if (action.payload === 'A') {
                orderCopy.sort( //sort me modifica el estado por eso creamos una copia
                    (a, b) => {
                        if (a.name > b.name) return 1; //primero a y despues b
                        else return -1; //primero b y despues a
                    }
                )
            } else if (action.payload === 'D') {
                orderCopy.sort(
                    (a, b) => {
                        if (a.name < b.name) return 1;
                        else return -1;
                    }
                )
            }
            return {
                ...state,
                myFavorites: orderCopy
            }

        default:
            return {...state}
    }
}
export default reducer