import Posts from './Posts/Posts';
import classes from './Profile.module.css'


const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg" />
            </div>
            <div>
                Ava +
            </div>
            <div>
                My post
            </div>
            <div>
                New post
            </div>
            <Posts />
        </div>
    );
}

export default Profile