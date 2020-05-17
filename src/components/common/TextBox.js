import React from 'react';

const TextBox = (props) => {
    return (    
        <input
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}           
            placeholder={props.placeholder}                   
            type="text"           
            className = {props.className}
           >            
        </input>            
    );
};

export default TextBox;