import classes from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
import Asside from './Assides/Asside';

const NavBar = (props) => {

    console.log(props)
    let outAsside = props.assideData.map((element) => <Asside text={element.text} url={element.url} />)

    return (
        <div className="">
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink className={navData => navData.isActive ? classes.active : classes.item}
                            to='/profile'>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? classes.active : classes.item} to='/messages'>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? classes.active : classes.item} to='/news'>News</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? classes.active : classes.item} to='/music'>Music</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? classes.active : classes.item} to='/settings'>Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="">
                {outAsside}
            </div>
        </div>

    );
}

export default NavBar