import styles from './Board.module.css';
import Square from './Square/Square';
import Game from './Game/Game';


function Board(props) {
    return (
        <>
            < Game />
            <div className={styles.board}>
                <Square value={props.squares[0]} onSquareClick={() => props.handleClick(0)} />
                <Square value={props.squares[1]} onSquareClick={() => props.handleClick(1)} />
                <Square value={props.squares[2]} onSquareClick={() => props.handleClick(2)} />
            </div>
            <div className={styles.board}>
                <Square value={props.squares[3]} onSquareClick={() => props.handleClick(3)} />
                <Square value={props.squares[4]} onSquareClick={() => props.handleClick(4)} />
                <Square value={props.squares[5]} onSquareClick={() => props.handleClick(5)} />
            </div>
            <div className={styles.board}>
                <Square value={props.squares[6]} onSquareClick={() => props.handleClick(6)} />
                <Square value={props.squares[7]} onSquareClick={() => props.handleClick(7)} />
                <Square value={props.squares[8]} onSquareClick={() => props.handleClick(8)} />
            </div>
        </>
    );
}

export default Board
