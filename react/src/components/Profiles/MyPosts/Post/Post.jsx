import classes from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={classes.item}>
                post 1
            </div>
            <div className={classes.item}>
                post 2
            </div>
        </div>
    );
}

export default Post