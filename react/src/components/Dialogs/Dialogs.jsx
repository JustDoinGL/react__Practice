import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';



const Dialogs = (props) => {

    let outDialogs = props.dialogData.map((element) => <DialogItem name={element.name} link={element.id} />)
    let outMessage = props.messageData.map((element) => <Message text={element.text} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {outDialogs}
            </div>
            <div className={classes.messages}>
                {outMessage}
            </div>
        </div>
    );
}

export default Dialogs