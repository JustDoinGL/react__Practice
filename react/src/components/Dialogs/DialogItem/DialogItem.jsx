import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

let DialogItem = (props) => {
    return (
        <div>
            <NavLink className={navData => navData.isActive ? classes.active : classes.item} to={props.link}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem