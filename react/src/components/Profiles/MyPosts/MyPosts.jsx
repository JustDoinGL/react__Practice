import Post from './Post/Post';
import { React } from 'react';


const MyPosts = (props) => {

    let outputPosts = props.postsData.map((element) => <Post text={element.text} name={element.name} valueLikes={element.valueLikes} />)

    let addPost = () => {
        props.addPost('Hi')
        alert("a")
    }

    // Не работает ссылка на реакт создание объекта, нужно разобраться чтоб работал текст и его можно было опубликовать.

    return (
        <div>
            <div>
                My post
            </div>
            <div>
                <p>New post: </p>
                <textarea></textarea>
                <button onClick={addPost}>Send</button>
            </div>
            {outputPosts}
        </div>
    );
}

export default MyPosts