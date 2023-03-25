import Post from './Post/Post';

const postsData = [
    {id: 1, name: 'Andrew', text: 'Hello world!',  valueLikes:'12' },
    {id: 2, name: 'Alex', text: 'Hi react',  valueLikes:'33' }
]

const MyPosts = () => {
    return (
        <div>
            <div>
                My post
            </div>
            <div>
                <p>New post: </p>
                <textarea  id="" ></textarea>
                <button>Send</button>
            </div>
            <Post text={postsData[0].text} name={postsData[0].name} valueLikes={postsData[0].valueLikes} />
        </div>
    );
}

export default MyPosts