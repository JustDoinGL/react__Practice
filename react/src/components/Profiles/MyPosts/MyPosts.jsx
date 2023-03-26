import Post from './Post/Post';

const MyPosts = (props) => {
    let outputPosts = props.postsData.map((element) => <Post text={element.text} name={element.name} valueLikes={element.valueLikes} />)
    return (
        <div>
            <div>
                My post
            </div>
            <div>
                <p>New post: </p>
                <textarea id="" ></textarea>
                <button>Send</button>
            </div>
            {outputPosts}
        </div>
    );
}

export default MyPosts