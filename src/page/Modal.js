import React from "react";
import "./modal.css"


const Modal = ({show,children,setShow})=> {


    const handleClick = (event) =>{
       setShow(!show)
    }


    return (
        <div class="modal" id="modal">
            <div class="modal-content">
                <span class="close" onClick={handleClick}>&times;</span>
                {children}
            </div>
        </div>
    )
}

export default Modal