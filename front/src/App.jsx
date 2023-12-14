import axios from 'axios';
import { useState, useEffect } from 'react';
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Nav from './components/nav/Nav.jsx'
import Cards from './components/cards/Cards.jsx'
import About from './components/about/About.jsx'
import Detail from './components/detail/Detail.jsx'
import Form from './components/form/Form.jsx'
import Favorites from './components/favorites/Favorites.jsx'

function App() {

  const location = useLocation();
  const initialRoute = location.pathname === '/';
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = `http://localhost:3001/rickandmorty/login/`
      const { data } = await axios(URL + `?email=${email}&password=${password}`)

      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    } catch (error) {
      alert('Datos no son correctos', error)
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  const onClose = (id) => {

    const idNum = characters.filter((characters) => {
      return characters.id !== id;
    });
    setCharacters(idNum);

  };

  //en la siguiente funcion se determina si el id es repetido o no. 
  const onSearch = async (id) => { //ingresa como number
    try {                                                                 //aqui se parsea
      const searchedItem = characters.findIndex((character) => character.id == (id)) //se tiene que modificar porque ingresa como string
      if (searchedItem > -1) {
        alert('El ID ingresado ya fue agregado');
      } else {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`) //template strings
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      }
    }
    catch (error) {
      alert('¡ID incorrecto!')
    }
  };

  return (

    <div className='App'>
      {!initialRoute && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />

      </Routes>

    </div>

  )
}

export default App
