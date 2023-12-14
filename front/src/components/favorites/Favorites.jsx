import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/action";
import { useState } from "react";
import style from "./style/favorites.module.css";


const Favorites = () => {

    const myFavorites = useSelector((state) => state.myFavorites);

    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div className={style.filterFav}>
            <div>
                <select onChange={handleOrder}>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>

                <select onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>

            <div className={style.cardFav}>
                {
                    myFavorites.map(({ id, name, status, species, gender, image, origin }) => {
                        return <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            image={image}
                            origin={origin}
                        />
                    })
                }
            </div>
        </div>
    )
}
export default Favorites