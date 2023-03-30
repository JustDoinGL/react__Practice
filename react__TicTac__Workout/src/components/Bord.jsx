import Square from './Square/Square';
import stules from './Bord.module.css'

function Board() {
    return (
        <div className={stules.boardRow}>
            <Square />
            <Square />
            <Square />
        </div>
    );
}

export default Board

