import classes from "./Asside.module.css"


const Asside = (props) => {
    return (
        <div className="">
            <h2>Best friends:</h2>
            <div className="">
                <img src={props.url} />
                <h3>{props.text}</h3>
            </div>
        </div>
    );
}

export default Asside;