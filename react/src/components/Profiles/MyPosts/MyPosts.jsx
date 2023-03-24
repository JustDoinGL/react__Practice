import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            <div>
                My post
            </div>
            <div>
                New post
            </div>
            <Post text='Hello world!' name='Andrew' valueLikes='12' />
            <Post text='Hi react' name='Alex' valueLikes='33' />
        </div>
    );
}

export default MyPosts