import React from 'react'
import Block from './Block'

function Board(props) {
    return(
        <div className="board">
            {
                props.marks.map((element, index) => {
                    return <Block key={`${element}${index}`} mark={element} onClick={() => props.changeMark(index)}/>
                })
            }
        </div>
    );
}

export default Board;