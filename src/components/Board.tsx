import React from 'react'
import Block from './Block'

interface Props {
    changeMark(index: number): void,
    marks: Array<string>,
}

function Board(props: Props) {
    return(
        <div className="board">
            {
                props.marks.map((element : string, index : number) => {
                    return <Block key={`${element}${index}`} mark={element} onClick={() => props.changeMark(index)}/>
                })
            }
        </div>
    );
}

export default Board;