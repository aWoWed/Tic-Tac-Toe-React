import React from 'react'
import '../App.css';


function Block(props) {
    return (
        <button className="block" onClick={props.onClick}>
            {props.mark}
        </button>
    );
};

export default Block;