import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.item} ${classes.active}`}>
                    Profile
                </li>
                <li className={classes.item}>
                    <a>Messages</a>
                </li>
                <li className={classes.item}>
                    <a>News</a>
                </li>
                <li className={classes.item}>
                    <a>Music</a>
                </li>
                <li className={classes.item}>
                    <a>Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar