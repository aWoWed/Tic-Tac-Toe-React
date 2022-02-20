import React from 'react'
import Block from './Block'

function Board(props) {
    return(
        <div className="board">
            <Block mark={props.marks[0]} onClick={() => props.changeMark(0)}/>
            <Block mark={props.marks[1]} onClick={() => props.changeMark(1)}/>
            <Block mark={props.marks[2]} onClick={() => props.changeMark(2)}/>
            <Block mark={props.marks[3]} onClick={() => props.changeMark(3)}/>
            <Block mark={props.marks[4]} onClick={() => props.changeMark(4)}/>
            <Block mark={props.marks[5]} onClick={() => props.changeMark(5)}/>
            <Block mark={props.marks[6]} onClick={() => props.changeMark(6)}/>
            <Block mark={props.marks[7]} onClick={() => props.changeMark(7)}/>
            <Block mark={props.marks[8]} onClick={() => props.changeMark(8)}/>
        </div>
    );
}

export default Board;