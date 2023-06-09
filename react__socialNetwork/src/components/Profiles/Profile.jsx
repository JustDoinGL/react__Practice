import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} addPost={props.addPost} />
        </div>
    );
}

export default Profile