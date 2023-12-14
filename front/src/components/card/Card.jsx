import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
// import { addFav, remoFav } from "../../redux/action";
import { addFav, remoFav } from "../../redux/action";
import { useState, useEffect } from "react";
import style from './style/card.module.css'

//destructuring ES6
const Card = ({ id, name, status, gender, species, origin, image, onClose }) => { 
   
   const dispatch = useDispatch();
   //se guaarda en una variable 

   const {pathname} = useLocation();

   const allCharacters = useSelector((state) => state.allCharacters)

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {                      //se colocan las llaves para transformarlo en objeto
      isFav ? dispatch(remoFav(id)) : dispatch(addFav({ id, name, status, gender, species, origin, image })) //se saco  onClose
      setIsFav(!isFav)
   };

   useEffect(() => {
      allCharacters.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [allCharacters]);


   return (
      <div className={style.contenCard}>

         <div>
            {
               isFav ? (<button onClick={handleFavorite}>❤️</button>)
                  : (<button onClick={handleFavorite}>🤍</button>)
            }
            {
        pathname !== '/favorites'
        ? <button onClick={() => onClose(id)}> X </button>
        : ''
      }
            {/* <button onClick={() => onClose(id)}>X</button> */}
         </div>

         <div>

            <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
            <h2>{species}</h2>
            <h2>{status}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
            <img src={image} alt={name} />
         </div>
      </div>
   );
}
export default Card




