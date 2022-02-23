import React, { MouseEventHandler } from "react";
import '../App.css';

type Props = {
    onClick: MouseEventHandler,
    mark: string,
}

function Block(props: Props) {
    return (
        <button className="block" onClick={props.onClick}>
            {props.mark}
        </button>
    );
}

export default Block;