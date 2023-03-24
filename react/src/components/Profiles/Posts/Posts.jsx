import classes from './Posts.module.css'


const Posts = () => {
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

export default Posts