import SearchBar from '../searchBar/SearchBar'
import { Link } from "react-router-dom"
import style from './style/nav.module.css'

const Nav = ({ onSearch }) => {

    return (
        <nav className={style.contenNav}>
            <div className={style.navList}>
                <div>
                    <Link to={'/home'}><button className={style.buttonList}>HOME</button></Link>
                </div>
                <div>
                    <Link to={'/about'}><button className={style.buttonList}>ABOUT</button></Link>
                </div>
                <div>
                    <Link to={'/favorites'}><button className={style.buttonList}>FAVORITES</button></Link>
                </div>
            </div>
            <div>
                <SearchBar onSearch={onSearch} />
            </div>

        </nav>
    )
}
export default Nav