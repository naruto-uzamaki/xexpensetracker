import React from "react";
import "./Button.css";

function Button(props) {
    const { text, background, icon, buttonSize, clickFunction, buttonType } = props;
    
    return (
        <button className={`Button ${buttonSize} ${background}`}
            onClick={clickFunction}
            type={buttonType}>
            {text || <img src={icon}/>}
        </button>
    );
}

export default Button;