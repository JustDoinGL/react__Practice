import Post from './Post/Post';

let postsData = [
    { id: 1, name: 'Andrew', text: 'Hello world!', valueLikes: '12' },
    { id: 2, name: 'Alex', text: 'Hi react', valueLikes: '33' },
    { id: 2, name: 'Alex', text: 'Hi react', valueLikes: '33' },
]

let outputPosts = postsData.map((element) => <Post text={element.text} name={element.name} valueLikes={element.valueLikes} />)

const MyPosts = () => {
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