import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';



const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg" />
            </div>
            <div>
                Ava +
            </div>
            <MyPosts />
                    </div>
    );
}

export default Profile