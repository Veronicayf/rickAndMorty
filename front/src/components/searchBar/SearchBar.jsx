import { useState } from "react"
import style from "./style/searchBar.module.css"

const SearchBar = ({onSearch})=>{
   const [id, setId] = useState('')

   const handleChange = (value)=>{
      setId(value);
   };

   return(

      <div>

            <input 
               type='search'
               placeholder="escribe un ID" 
               value={id}
               onChange={(element)=>handleChange(element.target.value)}
               className={style.inputSearch}
            /> 
         <button onClick={()=>onSearch(id)}
          className={style.buttonSearch}
          >Add</button> 
         {/* evitar el bucle infinito */}

      </div>
   )
};
export default SearchBar

