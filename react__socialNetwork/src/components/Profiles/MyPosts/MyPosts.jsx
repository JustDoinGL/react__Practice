import Post from './Post/Post';
import React, { Component } from 'react';



const MyPosts = (props) => {

    let outputPosts = props.postsData.map((element) => <Post text={element.text} name={element.name} valueLikes={element.valueLikes} />)
    let myInput = React.createRef()

    let addPost = () => {
        let text = "Helloy"
        props.addPost(text)
    }

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