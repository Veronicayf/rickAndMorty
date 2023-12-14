import Card from "../card/Card"
import style from "./style/cards.module.css"

const Cards = ({characters, onClose})=> {
   return(
      <div className={style.cards}>
         {
            characters.map(({id, name, species, gender, origin, status,image })=>{
               return <Card
               key={id}
               id={id}
               name = {name}
               species={species}
               gender={gender}
               origin={origin.name}
               status={status}
               image={image}
               onClose ={onClose}  
               />
            })
         }
      </div>

   )
}
export default Cards;
