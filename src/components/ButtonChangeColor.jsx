import React from "react";

function ButtonChangeColor() {

    function changeColor(e) {
        if (e.target.parentNode.classList.contains("grayCard") === true) {
            e.target.parentNode.classList.add("blackCard");
            e.target.parentNode.classList.remove("grayCard");

        } else if (e.target.parentNode.classList.contains("blackCard") === true) {
            e.target.parentNode.classList.add("orangCard");
            e.target.parentNode.classList.remove("blackCard");

        } else if (e.target.parentNode.classList.contains("orangCard") === true) {
            e.target.parentNode.classList.add("purpleCard");
            e.target.parentNode.classList.remove("orangCard");

        } else {
            e.target.parentNode.classList.add("grayCard");
            e.target.parentNode.classList.remove("purpleCard");

        }
    }

    return (
        <button className="button_card" onClick={(e) => { changeColor(e) }}>Change Color</button>
    )
}

export default ButtonChangeColor;