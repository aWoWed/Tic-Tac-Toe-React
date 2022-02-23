import React from 'react'
import Block from './Block'

interface Props {
    marks: Array<Mark>,
    changeMark(index: number): void,
}

function Board(props: Props) {
    return (
        <div className="board">
            {
                props.marks.map((element: Mark, index: number) => {
                    return <Block key={`${element}${index}`} mark={element} onClick={() => props.changeMark(index)}/>
                })
            }
        </div>
    );
}

export default Board;