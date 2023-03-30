import styles from './Board.module.css';
import Square from './Square/Square';



function Board(props) {
    function handleClick(i) {
        const nextSquares = props.squares.slice();
        nextSquares[i] = "X";
        props.setSquares(nextSquares);
    }


    return (
        <>
            <div className={styles.board}>
                <Square value={props.squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={props.squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={props.squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className={styles.board}>
                <Square value={props.squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={props.squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={props.squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className={styles.board}>
                <Square value={props.squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={props.squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={props.squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

export default Board
