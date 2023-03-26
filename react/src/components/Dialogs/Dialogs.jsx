import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';


let dialogData = [
    { name: 'Andrew', id: '1' },
    { name: 'Semen', id: '2' },
    { name: 'Alex', id: '3' },
    { name: 'Victor', id: '4' },
    { name: 'Sacha', id: '5' },
]

let messageData = [
    { text: 'Hi', id: '1' },
    { text: 'Semen', id: '2' },
    { text: 'Alex', id: '3' },
]

let outDialogs = dialogData.map((element) => <DialogItem name={element.name} link={element.id} />)

let outMessage = messageData.map((element) => <Message text={element.text} />)


const Dialogs = () => {
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